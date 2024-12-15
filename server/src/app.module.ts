import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfluencerService } from './influencer/influencer.service';
import { InfluencerController } from './influencer/influencer.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, InfluencerController],
  providers: [AppService, InfluencerService],
})
export class AppModule {}
