import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../../middleware/auth';

const V1_PostLogout = (router: IRoute) => {
    router.post(Authenticator, async (request: Request, response: Response, next: NextFunction) => {
        response.status(200);
        response.send('You have successfully logged out from your account')
    });
}

export { V1_PostLogout }