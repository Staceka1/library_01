// Model: Connects to the MongoDB database and creates a model for the users collection

import mongoose from 'mongoose';
import { userSchema } from './userSchema.js';

// Create a folder for users and all documents in that folder look like the userSchema
export const userModel = mongoose.model('User', userSchema);
