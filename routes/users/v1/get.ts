import { IRoute, NextFunction, Request, Response } from 'express';

const V1_GetUsers = (router: IRoute) => {
    router.get((request: Request, response: Response, next: NextFunction) => {
        response.status(200).send('Yes');
    })
}

export { V1_GetUsers };