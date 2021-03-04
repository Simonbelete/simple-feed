import loader from './loaders';
import express, { Application } from 'express';
import UsersRoute from './routes/users';
import AccountsRoute from './routes/accounts';
import PostRoute from './routes/posts';

async function startServer() {
    const app: Application = express();
    
    await loader(app);

    // Init routes
    new UsersRoute(app).routes();
    new AccountsRoute(app).routes();
    new PostRoute(app).routes();
}

startServer();