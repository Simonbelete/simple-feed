import { Application, IRoute } from 'express';
import { BaseRoute } from '../base';
import { V1_GetUsers } from './v1/get';
import { V1_PostUsers } from './v1/post';
import { V1_GetUsersById } from './v1/id/get';

class UsersRoute extends BaseRoute {
    router: IRoute;
    routerWithId: IRoute;

    constructor(app: Application) {
        super(app, 'UsersRouter');
        this.router = this.app.route('/api/v1/users');
        this.routerWithId = this.app.route('/api/v1/users/:userId');
    }

    public routes() {
        /**
         * Users API endpoints
         * 
         * @version 1.0.0
         */     
        V1_GetUsers(this.router);
        V1_PostUsers(this.router);
        // ${userId}
        V1_GetUsersById(this.routerWithId);
        

        return this.app;
    }
}

export default UsersRoute;