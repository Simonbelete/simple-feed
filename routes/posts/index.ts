import { Application, IRoute } from 'express';
import { BaseRoute } from '../base';
import { V1_PostPosts } from './v1/post';

class PostsRoute extends BaseRoute {
    router: IRoute;

    constructor(app: Application) {
        super(app, 'PostRouter');
        this.router = this.app.route('/api/v1/posts');
    }

    public routes() {
        /**
         * Users API endpoints
         * 
         * @version 1.0.0
         */  
        V1_PostPosts(this.router);

        return this.app;
    }
}

export default PostsRoute;