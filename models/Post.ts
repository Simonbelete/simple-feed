import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        likes: {
            type: Number,
            default: 0
        },
        caption: {
            type: String
        },
        image: {
            type: String,
            default: 'post-placeholder-image.jpeg'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        isLiked: {
            type: Boolean,
            default: false
        }
    }
)

var Post = mongoose.model('PostModel', PostSchema, 'Post');

export { Post, PostSchema };