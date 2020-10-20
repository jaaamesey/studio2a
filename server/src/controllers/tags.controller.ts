import { Controller, Get, Post, Request, Res, Param } from '@nestjs/common';
import { TagsService } from 'src/services/tags.service';
import { LoginDTO } from '../dto/user/LoginDTO';
import { RegisterDTO } from '../dto/user/RegisterDTO';

@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService,
  ) {}

  @Get()
  async GetAllTags() {
    return await this.tagsService.GetAllTags();
  }
}
