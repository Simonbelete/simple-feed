import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../middleware/auth';
import UserService from '../../../services/user_service';

const V1_GetUsers = (router: IRoute) => {
    router.get(async (request: Request, response: Response, next: NextFunction) => {
        var all_users = await new UserService().getAll();

        response.status(200);
        response.send(all_users);
    });
}

export { V1_GetUsers };