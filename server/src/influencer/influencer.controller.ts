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
      const imageData = await this.influencerService.proxyImage(url);
      
      res.set('Content-Type', 'image/jpeg');
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Cross-Origin-Resource-Policy', 'cross-origin');
      res.send(imageData);
    } catch (error) {
      res.status(500).send('Error fetching image');
    }
  }
}
