// Schema: Define the structure of the user object

import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },

    },
    { timestamps: true }
);


