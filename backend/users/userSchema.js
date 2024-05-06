// Schema: Define the structure of the user object

import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
    // set savedBooks to be an array of data that adheres to the bookSchema
    savedBooks: [bookSchema],

    },
    { timestamps: true }
);


