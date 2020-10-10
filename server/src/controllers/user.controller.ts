import { Controller, Post, Get, Body, Request } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { LoginDTO } from '../dto/user/LoginDTO';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService){
	}

	@Post('test')
	async test(test: string) {
		console.log(test);
		return true;
	}

	@Post('login')
	async login(@Request() req: any) {
		const isSuccess = await this.userService.attemptLogin(req.body.user as LoginDTO);
		if (isSuccess)
		{
			//perform logic to add session id to user cache, and database.
			//await this.sessionService.getSession(req.token)
		}
		return {
			isSuccess,
			session: null,
		};
	}
}