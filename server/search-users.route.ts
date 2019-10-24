import { Request, Response } from 'express';
import { USERS } from './db-data';
import { setTimeout } from 'timers';

export function searchUsers(req: Request, res: Response) {
    const queryParams = req.query;
    console.log( queryParams ) // console.log( JSON.stringify(queryParams) )
    /* receive request query params */
    const filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder,
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize);

    /* SELECT * FROM db ORDER BY id */
    let users = Object.values(USERS)
      // .filter(user => user.courseId == courseId)
      .sort((l1, l2) => l1.id - l2.id);
    // console.log( users )

    /* do filter to records receive db */
    if (filter) {
        users = users.filter(
         l => l.name.first.trim()
           .toLowerCase()
           .search(filter.toLowerCase()) >= 0);
    }
    // console.log( users )

    /* do sort order to records receive db */
    if (sortOrder == "desc") {
        users = users.reverse();
    }

    /* select page by position to records receive db */
    const initialPos = pageNumber * pageSize;
    const usersPage = users.slice(initialPos, initialPos + pageSize);
    console.log( usersPage )
    setTimeout(() => {
        res.status(200)
            .json({ payload: usersPage });
    },1000);
}
