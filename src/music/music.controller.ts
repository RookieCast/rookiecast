import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';

@Controller('customer')
export class MusicController {
    constructor(private musicService: MusicService) { }

    // add a music
    @Post('/create')
    async addMusic(@Res() res, @Body() createCustomerDTO: CreateMusicDto) {
        const customer = await this.musicService.addMusic(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "music has been created successfully",
            customer
        })
    }

    // Retrieve musics list
    @Get('musics')
    async getAllCustomer(@Res() res) {
        const customers = await this.musicService.getAllMusics();
        return res.status(HttpStatus.OK).json(customers);
    }

    // Fetch a particular music using ID
    @Get('music/:musicID')
    async getCustomer(@Res() res, @Param('musicID') musicID) {
        const music = await this.musicService.getMusic(musicID);
        if (!music) throw new NotFoundException('Music does not exist!');
        return res.status(HttpStatus.OK).json(music);
    }
}