import {
    getUsersController, getUserByIdController,
    updateUserController, createUserController,
    deleteUserController, searchUsersController,
} from './userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/search', searchUsersController);
userRouter.get('/', getUsersController);
userRouter.get('/:id', getUserByIdController);
userRouter.put('/:id', updateUserController);
userRouter.post('/', createUserController);
userRouter.delete('/:id', deleteUserController);

export  {userRouter};

