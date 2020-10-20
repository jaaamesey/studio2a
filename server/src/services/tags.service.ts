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
}
