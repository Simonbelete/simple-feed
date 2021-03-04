import { NextFunction, Request, Response } from 'express';
import * as admin from "firebase-admin";

const serviceAccount = require('../simple-feed-4ae6d-firebase-adminsdk-j0dwr-8b3f49c71f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

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

async function decodeIDToken(request: Request) {
    const tokenId = getTokenFromHeader(request) || ''; 

    // Decode token
    try{
        const decodedToken = await admin.auth().verifyIdToken(tokenId);
        return decodedToken;
    }catch(err){
        console.log(err);
    }

    return null;
}

const authenticateHeader = async (request: Request, response: Response, next: NextFunction) => {
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

    const currentUser = await decodeIDToken(request);
    response.locals.user = currentUser;
    
    return next();
};

export default authenticateHeader;

