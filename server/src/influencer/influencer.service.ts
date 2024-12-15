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

  async proxyImage(url: string): Promise<Buffer> {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
          Referer: 'https://www.instagram.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Error fetching image');
    }
  }

}
