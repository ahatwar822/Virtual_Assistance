import express from 'express'
import { logincontroller, logoutController, registerController } from '../controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.post('/register', registerController);
authRouter.post('/login', logincontroller);
authRouter.get('/logout', logoutController);

export default authRouter;