import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }),
    MusicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
