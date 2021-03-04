import dotenv from 'dotenv';
import express from 'express';

import * as bodyparser from 'body-parser';
import * as http from 'http';
import loader from './loaders';
import TestRoute from './routes/test_route';
import UsersRoute from './routes/users';

// Configs
const dotenvResult = dotenv.config();
const app: express.Application = express();
const server: http.Server = http.createServer(app);

// Vars
var port = process.env.SERVER_PORT || '3000';

// Express uses
app.use(bodyparser.json()); // Parse incoming body requests to json

// Error Handlers
if (dotenvResult.error) { throw dotenvResult.error }

app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).json({ status: err.statusCode, error: err, message: "Internal Server Error" });
})

// Init routes
new TestRoute(app).routes();
new UsersRoute(app).routes();

loader();

// Runserver
server.listen(port, () => console.log('Listending on port ' + port));