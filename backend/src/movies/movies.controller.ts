// src/movies/movies.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    HttpCode,
    HttpStatus,
    UseGuards,
  } from '@nestjs/common';
  import { MoviesService } from './movies.service';
  import { CreateMovieDto } from './dto/create-movie.dto';
  import { UpdateMovieDto } from './dto/update-movie.dto';
  import { MovieResponseDto } from './dto/movie-response.dto';
  import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
  import { AuthGuard } from '@nestjs/passport';
  
  @ApiTags('movies')
  @Controller('movies')
  export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() createMovieDto: CreateMovieDto): Promise<MovieResponseDto> {
      return this.moviesService.create(createMovieDto);
    }
  
    @Get()
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    async findAll(): Promise<MovieResponseDto[]> {
      return this.moviesService.findAll();
    }
  
    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    async findOne(@Param('id') id: string): Promise<MovieResponseDto> {
      return this.moviesService.findOne(id);
    }
  
    @Patch(':id')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    async update(
      @Param('id') id: string,
      @Body() updateMovieDto: UpdateMovieDto,
    ): Promise<MovieResponseDto> {
      return this.moviesService.update(id, updateMovieDto);
    }
  
    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: string): Promise<void> {
      return this.moviesService.remove(id);
    }
  }
  