import { Application, Request, Response } from 'express';
import { BaseRoute } from './base';

class TestRoute extends BaseRoute {
    
    constructor(app: Application) {
        super(app, 'TestRouter');
    }

    public routes() {

        this.app.route('/api/v1/test')
            .get((request: Request, response: Response) => {
                response.status(200).send('It works');
            });

        return this.app;
    }
}

export default TestRoute;