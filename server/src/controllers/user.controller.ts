import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { LoginDTO } from '../dto/user/LoginDTO';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService){
	}

	@Post()
	async login(@Body() loginDTO: LoginDTO) {
		const isSuccessful = await this.userService.attemptLogin(loginDTO);
		if (isSuccessful)
		{
			//perform logic to add session id to user cache, and database.
		}
		return isSuccessful;
	}
}