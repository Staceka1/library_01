// Dal: Data Access Layer
// Contains the functions that interact with the database
// Good because if you access the DB in multiple locations and you need to change the DB, you only need to change the DAL
// eg, swtiching from MongoDB to MySQL or PostgreSQL

import { userModel } from './userModel.js';

// ***** Basic CRUD operations *****
export async function getUsers() {
    return await userModel.find();
}

export async function getUserById(id) {
    return await userModel.findById(id);
}


export async function updateUser(id, user) {
    return await userModel.findByIdAndUpdate(id, user, { new: true }); // new: true returns the modified document rather than the original
}

export async function createUser(user) {
    return await userModel.create(user);
}

export async function deleteUser(id) {
    return await userModel.findByIdAndDelete(id);
}

// ***** Additional operations *****

export async function searchUsers(name, id) {
    console.log('searchUsers in DAL', name, id)
    return await userModel.find({ $or: [
            { name: { $regex: name, $options: 'i' } }, // Case-insensitive partial match for name
            { _id: id } // Exact match for the ID
        ] }); // i is for case-insensitive
}

// !!!! This is a bad idea because it exposes the password hash
// ? Should we hash the password here?
// ***** Additional operations *****
// todo: add a function to get a user by email
// normal comments
