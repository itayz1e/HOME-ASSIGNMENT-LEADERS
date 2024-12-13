import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfluencerService } from './influencer/influencer.service';
import { InfluencerController } from './influencer/influencer.controller';

@Module({
  imports: [],
  controllers: [AppController, InfluencerController],
  providers: [AppService, InfluencerService],
})
export class AppModule {}
