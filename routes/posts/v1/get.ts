import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../middleware/auth';
import PostDto from '../../../dto/post_dto';
import PostService from '../../../services/post_service';
import UserService from '../../../services/user_service';

const V1_GetPosts = (router: IRoute) => {
    router.post(Authenticator, async (request: Request, response: Response, next: NextFunction) => {
        var page = request.query.page || 1;
        var limit = request.query.limit || 10;
        var posts = await new PostService().getByPage(page, limit);
    })
}

export { V1_GetPosts }