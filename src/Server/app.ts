import express, { Application } from "express";
import dotenv from 'dotenv';
import { setupMiddlewares } from '../Middlewares/middlewares';

dotenv.config();

export default class Server {
    private application: Application;
    private port: number;

    constructor() {
        this.application = express();
        this.port = +process.env.SERVER_PORT! || 5000;
        setupMiddlewares(this.application);
        this.listen();
    }

    private listen() {
        this.application.listen(this.port, () => {
            console.log(`App running in port ${this.port}`);
        });
    }
}