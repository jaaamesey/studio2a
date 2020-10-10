import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMemes(): string {
    return 'memes';
  }
  getHello(): string {
	return 'Hello world!';
  }
}
