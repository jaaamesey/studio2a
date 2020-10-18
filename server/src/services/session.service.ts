import { Injectable } from '@nestjs/common';
import { db } from '../database';

import { randomBytes } from 'crypto';

@Injectable()
export class SessionService {
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

  async getUserFromRequest(req: any) {
    const sessionInfo = this.getUsernameAndTokenFromRequest(req);
    if (!sessionInfo) return null;
    const { username, sessionToken } = sessionInfo;
    return this.getUserFromSession(username, sessionToken);
  }

  async destroySession(username: string, sessionToken: string): Promise<void> {
    await db.none(
      'DELETE FROM session WHERE ss_us_user = (SELECT us_id FROM "user" WHERE us_name = $1) AND ss_id = $2',
      [username, sessionToken],
    );
    return;
  }

  getUsernameAndTokenFromRequest({ headers: { cookie } }: any) {
    const cookies: string[] = cookie.split(';');
    let username: string | null = null;
    let sessionToken: string | null = null;
    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split('=');
      if (name === 'USERNAME') {
        username = value;
      } else if (name === 'TOKEN') {
        sessionToken = value;
      }
    });

    if (!username || !sessionToken) {
      return null;
    }
    return { username, sessionToken };
  }
}
