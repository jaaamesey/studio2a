import { Injectable } from '@nestjs/common';
import { db } from '../database';
import { RecommendationDTO } from '../dto/recommendations/RecommendationDTO';

@Injectable()
export class RecommendationsService {
  GetRecommendationsForUser(username: string): Promise<RecommendationDTO[] | null> {
    return new Promise<RecommendationDTO[] | null>(async (resolve) => {
      await db.one('SELECT * FROM "user" WHERE US_Name=$1', [username]) //retrieve the user from the db
      .then(async (result: any) => {
        db.query(
          "SELECT " +
          "	co_code as courseCode, " +
          "	co_name as title, " +
          "	fa_displayname as faculty, " +
          "	co_lowestatar as lowestAtar, " +
          "	co_duration as duration, " +
          "	count(co_code) as score, " +
          " co_description as description " +
          "	" +
          "	FROM course_tag " +
          "		INNER JOIN course ON ct_co_course = co_id " +
          "		INNER JOIN faculty ON co_fa = fa_id " +
          "		" +
          "	WHERE ct_tg_tag IN " +
          "		(SELECT ut_tg_tag " +
          "		FROM user_tag " +
          "		WHERE ut_us_user = $1)" +
          "		" +
          "	GROUP BY (course_tag.ct_co_course, course.co_code, course.co_name, faculty.fa_displayname, course.co_lowestatar, course.co_duration, course.co_description) " +
          "	ORDER BY score DESC " +
          "	LIMIT 10"
        , [result.us_id])
        .then((recommendations: RecommendationDTO[]) => {
          console.log(recommendations);
          resolve(recommendations);
        });
      })
      .catch((error: any) => {
        console.error(error);
        resolve(null);
      });
    });
  }
}
