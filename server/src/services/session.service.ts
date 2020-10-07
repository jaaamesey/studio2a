import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService {
	checkIfSessionIsValid(): Promise<any> { //we should ideally be using this as a callback for every API hit
		return new Promise(async resolve => {
			//how do I access db?
			var isValid = true;
			if (!isValid)
			{
				await this.destroySession();
			}
			resolve(true);
		}); 
	}

	establishSession(): Promise<any> { //when a user logs in, they should be assigned a session
		return new Promise(resolve => {
			//how do I access db?
			resolve(true);
		}); 
	}

	destroySession(): Promise<any> { //when a user logs out, they should be assigned a session
		return new Promise(resolve => {
			//how do I access db?
			resolve(true);
		}); 
	}
}