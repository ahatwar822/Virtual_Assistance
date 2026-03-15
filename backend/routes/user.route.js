import express from 'express'
import { getcurrentUserController } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/current', getcurrentUserController);

export default userRouter;