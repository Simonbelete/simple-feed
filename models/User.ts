import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [false],
        },
        posts: {
            type: Number,
            default: 0,
        },
        followers: {
            type: Number,
            default: 0
        },
        followings: {
            type: Number,
            default: 0
        },
        account: {
            type: String,
            requried: [false]
        },
        name: {
            type: String,
            required: [false],
            //index: true,
        },
        profilePic: {
            type: String,
            default: 'profile-placeholder.png'
        },
        bio: {
            type: String,
        }
    },
    { timestamps: true },
)


var User = mongoose.model('UserModel', UserSchema, 'User');

export { User, UserSchema };