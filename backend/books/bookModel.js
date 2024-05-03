// Model: Connects to the MongoDB database and creates a model for the books collection

import mongoose from 'mongoose';
import { bookSchema } from './bookSchema.js';

// Create a folder for books and all documents in that folder look like the bookSchema
export const bookModel = mongoose.model('Book', bookSchema);
