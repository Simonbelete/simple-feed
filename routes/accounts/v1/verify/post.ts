import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../../middleware/auth';
import UserService from '../../../../services/user_service';
import UserDto from '../../../../dto/user_dto';

const V1_PostVerify = (router: IRoute) => {
    router.post(Authenticator, async (request: Request, response: Response, next: NextFunction) => {
        var user_dto : UserDto = {
            phoneNumber: request.body.phoneNumber,
            account: response.locals.user.user_id
        }
        
        var user_by_pnum = await new UserService().getByPhoneNumber(user_dto.phoneNumber);
        
        if(user_by_pnum == undefined || user_by_pnum == null) {
            // User not found create new one
            var new_user = await new UserService().create(user_dto);
            response.status(201); // Created
            response.send(new_user);
        }else {
            // User found return user
            response.status(200); // Retived
            response.send(user_by_pnum);
        }
    });
}

export { V1_PostVerify }