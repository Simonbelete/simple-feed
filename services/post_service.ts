import { Post } from '../models/Post';
import PostDto from '../dto/post_dto';

class PostService {
    public async create(post: PostDto) {
        var new_post = new Post({
            caption: post.caption,
            image: post.image,
            user: post.user
        });
        return await new_post.save();
    }

    public async getAll() {
        return await Post.find({}).limit(100);
    }
}

export default PostService;