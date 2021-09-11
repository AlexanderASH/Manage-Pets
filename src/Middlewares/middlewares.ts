import { Application } from "express";
import express from 'express';
import cors from 'cors';

export const setupMiddlewares = (app: Application) => {
    app.use(cors());
    app.use(express.json());
}