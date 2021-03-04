import { User, UserSchema } from '../models/User';
import UserDto from '../dto/user_dto';

class UserService {
    public async create(user: UserDto) {
       var new_user =  new User({ phoneNumber: user.phoneNumber });
       return await new_user.save();
    }

    public async getByPhoneNumber(phoneNumber: String) {
        return await User.findOne({phoneNumber: phoneNumber});
    }

    public async getAll() {
        return await User.find({}).limit(100);
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