import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './controllers/user.controller';
import { CoursesController } from './controllers/courses.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { CoursesService } from './services/courses.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, CoursesController],
  providers: [AppService, UserService, SessionService, CoursesService],
})
export class AppModule {}
