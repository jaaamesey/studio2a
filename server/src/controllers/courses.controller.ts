import { Controller, Get, Post, Request, Res, Param } from '@nestjs/common';
import { CoursesService } from 'src/services/courses.service';
import { LoginDTO } from '../dto/user/LoginDTO';
import { RegisterDTO } from '../dto/user/RegisterDTO';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
  ) {}

  @Get()
  async GetAllCourses() {
    return await this.coursesService.getCourseList();
  } 

  @Get(':facultyIdentifier')
  async GetAllCoursesForFaculty(@Param('facultyIdentifier') facultyIdentifier : string) {
    return await this.coursesService.getCourseListForFaculty(facultyIdentifier);
  }
}
