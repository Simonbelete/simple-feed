import { IRoute, NextFunction, Request, Response } from 'express';
import Authenticator from '../../../middleware/auth';
import UserService from '../../../services/user_service';
import UserDto from '../../../dto/user_dto';

import { User, UserSchema } from '../../../models/User';

const V1_PostUsers = (router: IRoute) => {
    router.get(Authenticator, (request: Request, response: Response, next: NextFunction) => {
        var user_dto : UserDto = {
            phoneNumber: request.body.phoneNumber
        }
        
        //var result = new UserService().verify(user_dto);
        const new_user = new User({phoneNumber: '33'});
        
        new_user.save((err) => {
            console.log(err);
            response.send('It workd');
        })

        /*new UserService().verify(user_dto)
            .then((result) => {
                if(result.sucess == false){
                    // Return internal server error
                    response.status(500);
                    response.send({
                        status_code: 500,
                        status: 'Internal Server Error',
                        // TODO: Remove message and code in production
                        message: result.message,
                        code: result.code
                    })
                }else if(result.sucess == true){
                    // Return based on the code
                    if(result.code == 'EXISTS') response.status(200);
                    if(result.code == 'CREATED') response.status(201);
        
                    // TODO: Restructure the json result instead of return as it.
                    response.send(result);
                }
            })
            .catch((error) => {
                    response.status(500);
                    response.send({
                        status_code: 500,
                        status: 'Internal Server Error',
                        message: error
                    })
            })*/

        /*if(result.sucess == false){
            // Return internal server error
            response.status(500);
            response.send({
                status_code: 500,
                status: 'Internal Server Error',
                // TODO: Remove message and code in production
                message: result.message,
                code: result.code
            })
        }else if(result.sucess == true){
            // Return based on the code
            if(result.code == 'EXISTS') response.status(200);
            if(result.code == 'CREATED') response.status(201);

            // TODO: Restructure the json result instead of return as it.
            response.send(result);
        }*/
    })
}

export { V1_PostUsers };