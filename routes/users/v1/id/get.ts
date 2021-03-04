import { IRoute, NextFunction, Request, Response } from 'express';

const V1_GetUsersById = (router: IRoute) => {
    router.get((request: Request, response: Response, next: NextFunction) => {
        response.status(200).send('get by id' + request.params.userId);
    })
}

export { V1_GetUsersById };