import * as express from 'express';
import { Application } from 'express';
import { searchLessons } from './search-lessons.route';
import { searchUsers } from "./search-users.route";

const app: Application = express();

app.route('/api/lessons').get(searchLessons); //TODO:  http://localhost:9000/api/lessons?courseId=1&filter=&sortOrder=asc&pageNumber=1&pageSize=3
app.route('/api/users').get(searchUsers); //TODO:  http://localhost:9000/api/users?filter=&sortOrder=asc&pageNumber=2&pageSize=10

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
