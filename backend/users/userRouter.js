import {
    getUsersController, getUserByIdController,
    updateUserController, createUserController,
    deleteUserController,
} from './userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.get('/', getUsersController);
userRouter.get('/:id', getUserByIdController);
userRouter.put('/:id', updateUserController);
userRouter.post('/', createUserController);
userRouter.delete('/:id', deleteUserController);

export  {userRouter};

