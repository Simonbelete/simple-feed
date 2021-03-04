import { Application } from 'express';

abstract class BaseRoute {
    app: Application;
    name: string;

    constructor(app: Application, name: string) {
        this.app = app;
        this.name = name;
    }

    abstract routes(): Application;
}

export { BaseRoute };