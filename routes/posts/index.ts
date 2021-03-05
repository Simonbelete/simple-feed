import { Application, IRoute } from 'express';
import { BaseRoute } from '../base';
import { V1_PostPosts } from './v1/post';
import { V1_PutPost } from './v1/id/put';

class PostsRoute extends BaseRoute {
    router: IRoute;
    routerWithId: IRoute;

    constructor(app: Application) {
        super(app, 'PostRouter');
        this.router = this.app.route('/api/v1/posts');
        this.routerWithId = this.app.route('/api/v1/posts/:postId');
    }

    public routes() {
        /**
         * Users API endpoints
         * 
         * @version 1.0.0
         */  
        V1_PostPosts(this.router);
        // ${postId}
        V1_PutPost(this.routerWithId);

        return this.app;
    }
}

export default PostsRoute;