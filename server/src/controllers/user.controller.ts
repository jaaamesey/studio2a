import { Controller, Post, Request, Res } from '@nestjs/common';
import { SessionService } from 'src/services/session.service';
import { UserService } from 'src/services/user.service';
import { LoginDTO } from '../dto/user/LoginDTO';
import { RegisterDTO } from '../dto/user/RegisterDTO';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  @Post('test')
  async test(test: string) {
    console.log(test);
    return true;
  }

  @Post('login')
  async login(@Request() req: any, @Res() res: any) {
    const loginDTO = req.body.user as LoginDTO;
    const user = await this.userService.attemptLogin(loginDTO);
    if (!user) {
      res.send({ isSuccess: false });
      return;
    }
    const sessionToken = await this.sessionService.establishSession(user.id);
    res
      .header(
        'Set-Cookie',
        `TOKEN=${sessionToken}; Path=/; SameSite=Strict; HttpOnly`,
      ) // "Secure" would need to be added if hosted
      .header(
        'Set-Cookie',
        `USERNAME=${loginDTO.username}; Path=/; SameSite=Strict; HttpOnly`,
      ) // "Secure" would need to be added if hosted
      .send({
        isSuccess: true,
        user: {
          username: user.username,
          type: user.type,
        },
      });
  }

  @Post('register')
  async register(@Request() req: any) {
    const isSuccess = await this.userService.attemptRegister(
      req.body.user as RegisterDTO,
    );
    return { isSuccess };
  }
}
