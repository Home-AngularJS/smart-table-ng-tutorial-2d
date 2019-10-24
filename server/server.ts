import * as express from 'express';
import { Application } from 'express';
import { searchLessons } from './search-lessons.route';

const app: Application = express();

app.route('/api/lessons').get(searchLessons); //TODO:  http://localhost:4200/api/lessons?courseId=1&filter=&sortOrder=asc&pageNumber=1&pageSize=3

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
