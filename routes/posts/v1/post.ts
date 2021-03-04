import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../middleware/auth';
import PostDto from '../../../dto/post_dto';
import PostService from '../../../services/post_service';
import UserService from '../../../services/user_service';

const V1_PostPosts = (router: IRoute) => {
    router.post(Authenticator, async (request: Request, response: Response, next: NextFunction) => {
        // TODO: Validate payload
        // Get user id using account
        var user = await new UserService().getByAccount(response.locals.user.user_id);
        console.log(user);
        var post_dto : PostDto = {
            caption: request.body.caption,
            image: request.body.image,
            user: user
        }

        var new_post = await new PostService().create(post_dto);
        response.status(201);
        response.send(new_post);
    })
}

export { V1_PostPosts }