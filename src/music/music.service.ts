import { Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Music } from './interface/music.interface';
import { CreateMusicDto } from './dto/create-music.dto';

@Injectable()
export class MusicService {
  constructor (@InjectModel('Music') private readonly musicModel: Model<Music>) {}

  // get all musics
  async getAllMusics(): Promise<Music> {
    const musics = await this.musicModel.find().exec();
    return musics;
  }

  // get a music
  async getMusic(musicID): Promise<Music> {
    const music = await this.musicModel.findById(musicID).exec();
    return music;
  }
  // Add Music
  async addMusic (createMusicDto: CreateMusicDto, file): Promise<Music> {
    const newMusic = await this.musicModel(createMusicDto);
    return newMusic.save();
  }

  // Edit music details
  async updateMusic(musicID, createMusicDto: CreateMusicDto): Promise<Music> {
    const updatedMusic = await this.musicModel
        .findByIdAndUpdate(musicID, createMusicDto, { new: true });
    return updatedMusic;
  }

  // Delete a music
  async deleteMusic(musicID): Promise<any> {
    const deletedMusic = await this.musicModel.findByIdAndRemove(musicID);
    return deletedMusic;
  }
}
