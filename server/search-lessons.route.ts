import { Request, Response } from 'express';
import { LESSONS } from './db-data';
import { setTimeout } from 'timers';

export function searchLessons(req: Request, res: Response) {
    const queryParams = req.query;
    console.log( queryParams ) // console.log( JSON.stringify(queryParams) )
    /* receive request query params */
    const courseId = queryParams.courseId,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder,
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize);

    /* SELECT * FROM db WHERE courseId = <courseId> ORDER BY id */
    let lessons = Object.values(LESSONS)
      .filter(lesson => lesson.courseId == courseId)
      .sort((l1, l2) => l1.id - l2.id);
    // console.log( lessons )

    /* do filter to records receive db */
    if (filter) {
       lessons = lessons.filter(
         l => l.description.trim()
           .toLowerCase()
           .search(filter.toLowerCase()) >= 0);
    }
    // console.log( lessons )

    /* do sort order to records receive db */
    if (sortOrder == "desc") {
        lessons = lessons.reverse();
    }

    /* select page by position to records receive db */
    const initialPos = pageNumber * pageSize;
    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);
    console.log( lessonsPage )
    setTimeout(() => {
        res.status(200)
            .json({ payload: lessonsPage });
    },1000);
}
