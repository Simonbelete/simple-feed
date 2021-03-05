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

    public async like(id: String) {
        return await Post.findByIdAndUpdate({id},{$inc: {likes: 1}});
    }

    public async getByPage(page: number = 1, limit: number = 10) {
        var offset = page * limit;
        return await Post.find({}).limit(limit).skip(offset).sort('-createdOn');
    }
}

export default PostService;