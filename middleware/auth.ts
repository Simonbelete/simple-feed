import { NextFunction, Request, Response } from 'express';

/**
 * The JWT will come in a header with the form
 * 
 * Authorization: Bearer ${JWT}
 */
const getTokenFromHeader = (request: Request) => {
    if(request.headers.authorization && request.headers.authorization.split(' ')[0] == 'Bearer')
        return request.headers.authorization.split(' ')[1];
    return null;
}

const authenticateHeader = (request: Request, response: Response, next: NextFunction) => {
    if(getTokenFromHeader(request) == null) {
        // Return 403
        response.setHeader('Content-Type', 'application/json');
        response.status(403);
        response.end(
            JSON.stringify({
                'status_code': 403,
                'status': 'Unauthorized',
                'erros': [
                    'No Bearer Token fond in header Authorizaton'
                ],
                // Mostly for debugging
                'fix': [
                    'Place Authorization header like this format \'Authorization Bearer ${token} \''
                ]
            })
        )
    }

    return next();
};

export default authenticateHeader;

