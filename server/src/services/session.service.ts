import { Injectable } from '@nestjs/common';
import { db } from '../database';

import { randomBytes } from 'crypto';

@Injectable()
export class SessionService {
  checkIfSessionIsValid(): Promise<any> {
    //we should ideally be using this as a callback for every API hit
    return new Promise(async (resolve) => {
      //how do I access db?
      const isValid = true;
      if (!isValid) {
        await this.destroySession();
      }
      resolve(true);
    });
  }

  async establishSession(userId: number): Promise<string> {
    //when a user logs in, they should be assigned a session
    const newSessionId = randomBytes(16).toString('hex');
    await db.none(
      "INSERT INTO session VALUES ($1, $2, current_timestamp + (20 * interval '1 year'))",
      [newSessionId, userId],
    );
    return newSessionId;
  }

  async getUserFromSession(
    username: string,
    sessionToken: string,
  ): Promise<{
    id: number;
    type: 'STUDENT' | 'TEACHER' | 'ADMIN';
    username: string;
  } | null> {
    return await db.one(
      'SELECT us_id AS id, us_type AS type, us_name AS username FROM "user" INNER JOIN session ON us_id = ss_us_user WHERE us_name = $1 AND ss_id = $2',
      [username, sessionToken],
    );
  }

  destroySession(): Promise<any> {
    //when a user logs out, they should be assigned a session
    return new Promise((resolve) => {
      //how do I access db?
      resolve(true);
    });
  }
}
