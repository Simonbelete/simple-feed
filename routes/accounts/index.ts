import { Application, IRoute } from 'express';
import { BaseRoute } from '../base';

class AccountsRoute extends BaseRoute {
    routerVerify: IRoute;

    constructor(app: Application) {
        super(app, 'AccountsRouter');
        this.routerVerify = this.app.route('/api/v1/accounts/verify');
    }

    public routes() {

        return this.app;
    }
}