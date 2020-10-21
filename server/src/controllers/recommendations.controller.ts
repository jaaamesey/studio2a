import { Controller, Get, Post, Request, Res, Param } from '@nestjs/common';
import { RecommendationsService } from 'src/services/recommendations.service';

@Controller('recommendations')
export class RecommendationsController {
  constructor(
    private readonly recommendationsService: RecommendationsService,
  ) {}

  @Get(':username')
  async GetRecommendationsForUser(@Param('username') username : string) {
    return await this.recommendationsService.GetRecommendationsForUser(username);
  }
}
