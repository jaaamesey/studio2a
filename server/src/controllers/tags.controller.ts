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

  @Get(':username')
  async GetTagsForUser(@Param('username') username : string) {
    return await this.tagsService.GetTagsForUser(username);
  }

  @Post('SetTags')
  async SetTags(@Request() req: any, @Res() res: any) {
    const user = JSON.parse(req.body.user) as LoginDTO;
    const tags = req.body.tags as number[];
    return await this.tagsService.SetTagsForUser(user, tags);
  }
}
