import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../middleware/auth';
import PostService from '../../../services/post_service';

const V1_GetPosts = (router: IRoute) => {
    router.get(Authenticator, async (request: Request, response: Response, next: NextFunction) => {
        // TODO: Improve code quality and readablity i.e remove the nested if statements
        var page : Number = Number(request.query.page);
        var limit : Number = Number(request.query.limit);

        var posts = await new PostService().getByPage(+page, +limit);

        response.status(200);
        response.send(posts);
    })
}

export { V1_GetPosts }