import { User, UserSchema } from '../models/User';
import UserDto from '../dto/user_dto';

class UserService {
    public create(user: UserDto) {
       new User({
           phoneNumber: user.phoneNumber
        })
        .save((err, doc) => {
            // TODO: log on error
            if(err) return false;
            return true;
        })
    }

    public getByPhoneNumber(phoneNumber: String) {
        return User.find({phoneNumber: phoneNumber});
    }

    public async verify(user: UserDto) {
        const result = await User.exists({phoneNumber: user.phoneNumber});
        // Check if user exists
        //var result = await User.exists({phoneNumber: user.phoneNumber})
        //console.log(result);
        /*, (err, result) => {
            console.log(err);
            console.log(result);

            // TODO: Remove debugging messages and log the errors
            if(err) return {sucess: false, code: 'INTERANL', message: err};
            if(result == true)
                return {
                    sucess: true,
                    code: 'EXISTS',
                    message: 'User already exists, return existing user',
                    data: this.getByPhoneNumber(user.phoneNumber)
                }
            else if(result == false)
                return {
                    sucess: true,
                    code: 'CREATED',
                    message: 'New User Created',
                    data: this.create(user)
                }
        });*/
        
        return {sucess: false, code: '', message: ''};
    }
}

export default UserService;