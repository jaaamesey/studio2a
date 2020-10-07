import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, SessionService],
})
export class AppModule {}
