import loader from './loaders';
import express, { Application } from 'express';
import UsersRoute from './routes/users';

async function startServer() {
    const app: Application = express();
    
    await loader(app);

    // Init routes
    new UsersRoute(app).routes();
}

startServer();