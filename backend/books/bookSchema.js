// Schema: Define the structure of the book object

import mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

    },
    { timestamps: true }
);


