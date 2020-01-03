import { FileInterceptor } from '@nestjs/platform-express'
import { Controller, Get, Res, HttpStatus, Post, Body, NotFoundException, Param, UseInterceptors, UploadedFile } from '@nestjs/common';

import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';

@Controller('music')
export class MusicController {
  constructor(private musicService: MusicService) { }

  // add a music
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async addMusic(@Res() res, @Body() createMusicDto: CreateMusicDto, @UploadedFile() file) {
    const music = await this.musicService.addMusic(createMusicDto, file);
    return res.status(HttpStatus.OK).json({
      message: "music has been created successfully",
      music
    })
  }

  // Retrieve musics list
  @Get('list')
  async getAllMusics(@Res() res) {
    const musics = await this.musicService.getAllMusics();
    return res.status(HttpStatus.OK).json(musics);
  }

  // Fetch a particular music using ID
  @Get('music/:musicID')
  async getMusic(@Res() res, @Param('musicID') musicID) {
    const music = await this.musicService.getMusic(musicID);
    if (!music) throw new NotFoundException('Music does not exist!');
    return res.status(HttpStatus.OK).json(music);
  }
}