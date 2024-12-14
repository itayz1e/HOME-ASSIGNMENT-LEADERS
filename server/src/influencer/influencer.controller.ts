import { Controller, Get, Query } from '@nestjs/common';
import { InfluencerService } from './influencer.service';


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
  
}
