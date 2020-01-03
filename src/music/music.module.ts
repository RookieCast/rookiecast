import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { MusicSchema } from './music.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Music', schema: MusicSchema }])
  ],
  providers: [MusicService],
  controllers: [MusicController]
})
export class MusicModule {}
