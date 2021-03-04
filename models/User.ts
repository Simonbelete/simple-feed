import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            default: null,
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
            default: null
        },
        name: {
            type: String,
            default: null,
            //index: true,
        },
        profilePic: {
            type: String,
            default: 'profile-placeholder.png'
        },
        bio: {
            type: String,
        },
        phoneNumber: {
            type: String,
            default: null,
            unique: true
        }
    },
    { timestamps: true },
)


var User = mongoose.model('UserModel', UserSchema, 'User');

export { User, UserSchema };