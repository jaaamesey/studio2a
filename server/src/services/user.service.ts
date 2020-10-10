import { Injectable } from '@nestjs/common';
import { LoginDTO } from '../dto/user/LoginDTO';
import { db } from '../database';

@Injectable()
export class UserService {
	attemptLogin(loginDTO: LoginDTO): Promise<boolean> {
		return new Promise(resolve => {
			db.oneOrNone('SELECT * FROM "user" WHERE US_Name=$1 and US_Password=$2', [loginDTO.username, loginDTO.password])
			.then((user: any, ) => {
				if (user == null)
				{
					console.log('user not found');
					resolve(false);
				}
				else
				{
					console.log('user found!');
					resolve(true);
				}
			})
			.catch((error:any) => { console.log(error) });
		}); 
	}
}