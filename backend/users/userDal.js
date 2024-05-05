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

export async function searchUsers(title) {
    return await userModel.find({ title: { $regex: title, $options: 'i' } }); // i is for case-insensitive
}
