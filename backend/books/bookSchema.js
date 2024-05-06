// Schema: Define the structure of the book object

import mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema(
    {
         authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
        },
  
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },

    },
    { timestamps: true }
);


