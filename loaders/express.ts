import dotenv from 'dotenv';
import express, { Application, request } from 'express';

import * as bodyparser from 'body-parser';
import * as http from 'http';

export default (app: Application) => {
    // Configs
    const dotenvResult = dotenv.config();
    const server: http.Server = http.createServer(app);

    // Vars
    var port = process.env.SERVER_PORT || '80';

    // Express uses
    app.use(bodyparser.json()); // Parse incoming body requests to json

    /**
     * Health Check endpoints
     */
    app.get('/health', (request, response) => {
        response.status(200).end();
    })

    // Error Handlers
    //if (dotenvResult.error) { throw dotenvResult.error }

    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
        res.status(err.statusCode).json({ status: err.statusCode, error: err, message: "Internal Server Error" });
    })

    // RunServer
    server.listen(port, () => console.log('Listending on port ' + port));

}
