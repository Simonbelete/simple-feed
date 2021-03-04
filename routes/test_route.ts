import { Application, Request, Response } from 'express';
import { BaseRoute } from './base';
import Authenticator from '../middleware/auth';

class TestRoute extends BaseRoute {
    
    constructor(app: Application) {
        super(app, 'TestRouter');
    }

    public routes() {

        this.app.route('/api/v1/test')
            .get(Authenticator, (request: Request, response: Response) => {
                console.log(response.locals);
                response.status(200).send('It works ');
            });

        return this.app;
    }
}

export default TestRoute;