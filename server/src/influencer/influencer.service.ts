import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { Influencer } from './influencer.model';
dotenv.config();

@Injectable()
export class InfluencerService {
  private readonly apiUrl = process.env.API_URL;

  async getUsers(
    query: string,
    type: string = 'lookalike',
    platform: string = 'instagram',
    limit: number = 10,
  ): Promise<Influencer[]> {
    try {
      const response = await axios.get(`${this.apiUrl}/dict/users/`, {
        headers: {
          authkey: process.env.API_KEY,
        },
        params: {
          q: query,
          type: type,
          platform: platform,
          limit: limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error during request:', error.message);
      throw new Error('Failed to fetch users');
    }
  }

  async getUserFeed(url: string, limit: number): Promise<Influencer> {
    try {
      const response = await axios.get(`${this.apiUrl}/raw/ig/user/feed/`, {
        headers: { authkey: process.env.API_KEY },
        params: { url: url, limit: limit },
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching user feed:', error.message);
      throw new Error('Failed to fetch user feed');
    }
  }
}
