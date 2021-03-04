import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../../middleware/auth';
import UserService from '../../../../services/user_service';
import UserDto from '../../../../dto/user_dto';

const V1_PostVerify = (router: IRoute) => {
    router.post(Authenticator, (request: Request, response: Response, next: NextFunction) => {
        var user_dto : UserDto = {
            phoneNumber: request.body.phoneNumber
        }

        
    });
}