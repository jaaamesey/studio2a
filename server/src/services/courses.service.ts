import { Injectable } from '@nestjs/common';
import { LoginDTO } from '../dto/user/LoginDTO';
import { RegisterDTO } from '../dto/user/RegisterDTO';
import { db } from '../database';
import { CourseListItemsDTO } from 'src/dto/course/CourseListItemsDTO';
import { CourseListItemDTO } from 'src/dto/course/CourseListItemDTO';

@Injectable()
export class CoursesService {
  getCourseList(): Promise<CourseListItemsDTO | null> {
    return new Promise(async (resolve) => {
      await db.query('SELECT CO_Id as id, CO_Code as code, CO_Name as name FROM Course')
      .then((courses: CourseListItemDTO[]) => {
        resolve(new CourseListItemsDTO("All courses", "", courses));
      })
      .catch((error: any) => {
        console.error(error);
        resolve(null);
      });
    });
  }

  getCourseListForFaculty(facultyIdentifier: string): Promise<CourseListItemsDTO | null> {
    return new Promise(async (resolve) => {
      await db.one('SELECT FA_Id, FA_Identifier, FA_DisplayName, FA_Description FROM Faculty WHERE FA_Identifier = $1', [facultyIdentifier])
      .then(async (faculty: any) => {
        console.log("Faculty:")
        console.log(faculty);
        await db.query('SELECT CO_Id as id, CO_Code as code, CO_Name as name FROM Course WHERE CO_FA = $1', [faculty.fa_id])
        .then((courses: CourseListItemDTO[]) => {
          console.log("Courses:")
          console.log(courses);
          console.log(faculty);
          resolve(new CourseListItemsDTO(faculty.fa_displayname, faculty.fa_description, courses));
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
}
