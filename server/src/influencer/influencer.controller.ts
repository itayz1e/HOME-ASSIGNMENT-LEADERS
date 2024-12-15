import { Controller, Get, Query, Res } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import axios from 'axios';
import { Response } from 'express';

@Controller('influencer')
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}

  @Get('users')
  async getUsers(@Query('q') query: string) {
    return this.influencerService.getUsers(query);
  }

  @Get('user-feed')
  async getUserFeed(@Query('url') url: string, @Query('limit') limit: number) {
    return this.influencerService.getUserFeed(url, limit);
  }

  @Get('proxy-image')
  async proxyImage(@Query('url') url: string, @Res() res: Response) {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
          Referer: 'https://www.instagram.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
      });

      res.set('Content-Type', response.headers['content-type']);
      res.set('Access-Control-Allow-Origin', '*'); // אפשר גישה מכל מקור
      res.set('Cross-Origin-Resource-Policy', 'cross-origin'); // הוסף את זה
      res.send(response.data);
    } catch (error) {
      res.status(500).send('Error fetching image');
    }
  }
}
