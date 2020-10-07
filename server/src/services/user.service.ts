import { Injectable } from '@nestjs/common';
import { LoginDTO } from '../dto/user/LoginDTO';

@Injectable()
export class UserService {
	attemptLogin(loginDTO: LoginDTO): Promise<any> {
		return new Promise(resolve => {
			//how do I access db?
			resolve(true);
		}); 
	}
}