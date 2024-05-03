import {
    getBooksController, getBookByIdController,
    updateBookController, createBookController,
    deleteBookController,
} from './bookController.js';
import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/', getBooksController);
bookRouter.get('/:id', getBookByIdController);
bookRouter.put('/:id', updateBookController);
bookRouter.post('/', createBookController);
bookRouter.delete('/:id', deleteBookController);

export  {bookRouter};

