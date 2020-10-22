import { Injectable } from '@nestjs/common';
import { LoginDTO } from '../dto/user/LoginDTO';
import { RegisterDTO } from '../dto/user/RegisterDTO';
import { db } from '../database';
import { TagDTO } from 'src/dto/tag/TagDTO';

@Injectable()
export class TagsService {
  GetAllTags(): Promise<(TagDTO[]) | null> {
    return new Promise(async (resolve) => {
      await db.query('SELECT TG_Id as id, TG_Name as name FROM Tag')
      .then((tags: TagDTO[]) => {
        resolve(tags);
      })
      .catch((error: any) => {
        console.error(error);
        resolve(null);
      });
    });
  }

  GetTagsForUser(username: string): Promise<(TagDTO[]) | null> {
    return new Promise(async (resolve) => {
      await db.one('SELECT * FROM "user" WHERE US_Name=$1', [username]) //retrieve the user from the db
      .then(async (result: any) => {
        await db.query('SELECT TG_Id as id, TG_Name as name FROM Tag INNER JOIN User_Tag ON UT_TG_TAG = TG_Id WHERE UT_US_User = $1', result.us_id)
        .then((tags: TagDTO[]) => {
          resolve(tags);
        })
        .catch((error: any) => {
          console.error(error);
          resolve(null);
        });
      })
      .catch((error: any) => {
        console.error(error);
        resolve(null);
      });
    });
  }

  SetTagsForUser(user: LoginDTO, tags: number[]): Promise<Boolean> {
    return new Promise<Boolean>(async (resolve) => {
      await db.one('SELECT * FROM "user" WHERE US_Name=$1', [user.username]) //retrieve the user from the db
      .then(async (result: any) => {
        await db.none('DELETE FROM User_Tag WHERE UT_US_User = $1', result.us_id) //delete any existing rows  
        .then(async () =>
        {
          var insertScript = 'INSERT INTO User_Tag (UT_US_User, UT_TG_Tag) VALUES' + tags.map(t => ' (' + result.us_id + ', ' + t + ')').join(', ') + ";"
          await db.none(insertScript) //insert new list of user tags.
          .then(() =>
          {
            resolve(true);
          })
          .catch((error: any) => {
            console.error(error);
            resolve(false);
          });
        })
        .catch((error: any) => {
          console.error(error);
          resolve(false);
        });
      })
      .catch((error: any) => {
        console.error(error);
        resolve(false);
      });
    });
  }
}
