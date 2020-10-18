import { Injectable } from '@nestjs/common';
import { LoginDTO } from '../dto/user/LoginDTO';
import { RegisterDTO } from '../dto/user/RegisterDTO';
import { db } from '../database';

@Injectable()
export class UserService {
  attemptLogin(
    loginDTO: LoginDTO,
  ): Promise<{ id: number; username: string; type: string } | null> {
    return new Promise((resolve) => {
      db.oneOrNone('SELECT * FROM "user" WHERE US_Name=$1 and US_Password=$2', [
        loginDTO.username,
        loginDTO.password,
      ])
        .then((user: any) => {
          if (!user) {
            resolve(null);
          } else {
            resolve({
              id: user.us_id,
              username: user.us_name,
              type: user.us_type,
            });
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    });
  }

  attemptRegister(registerDTO: RegisterDTO): Promise<boolean> {
    return new Promise(async (resolve) => {
      await db
        .none(
          'INSERT INTO "user" (US_Name, US_Password, US_Email, US_Type) VALUES ($1, $2, $3, \'STUDENT\')',
          [registerDTO.username, registerDTO.password, registerDTO.email],
        )
        .catch((error: any) => {
          console.error(error);
          resolve(false);
        });

      resolve(true);
    });
  }
}
