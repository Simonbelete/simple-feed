import { Application, IRoute } from 'express';
import { BaseRoute } from '../base';
import { V1_PostVerify } from './v1/verify/post';

class AccountsRoute extends BaseRoute {
    routerVerify: IRoute;

    constructor(app: Application) {
        super(app, 'AccountsRouter');
        this.routerVerify = this.app.route('/api/v1/accounts/verify');
    }

    public routes() {
        /**
         * Users API endpoints
         * 
         * @version 1.0.0
         */    
        V1_PostVerify(this.routerVerify);

        return this.app;
    }
}

export default AccountsRoute;