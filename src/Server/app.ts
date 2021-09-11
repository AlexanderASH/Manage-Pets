import express, { Application } from "express";
import dotenv from 'dotenv';
import { setupMiddlewares } from '../Middlewares/middlewares';
import petRoute from "../app/pets/routes/pet";

dotenv.config();

export default class Server {
    private application: Application;
    private port: number;

    constructor() {
        this.application = express();
        this.port = +process.env.SERVER_PORT! || 5000;
        setupMiddlewares(this.application);
        this.setupRoutes();
        this.listen();
    }

    private listen() {
        this.application.listen(this.port, () => {
            console.log(`App running in port ${this.port}`);
        });
    }

    private setupRoutes() {
        this.application.use('/api/v1/pets', petRoute);
    }
}