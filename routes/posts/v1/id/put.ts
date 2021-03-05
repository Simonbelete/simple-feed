import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../../middleware/auth';

const V1_PutPost = (router: IRoute) => {
    router.put(Authenticator, async (request: Request, response: Response, next: NextFunction) => {
        
    });
}

export { V1_PutPost }