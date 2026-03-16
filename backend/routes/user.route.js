import express from 'express'
import { getcurrentUserController } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middlewar.js';

const userRouter = express.Router();

userRouter.get('/current',authMiddleware, getcurrentUserController);

export default userRouter;