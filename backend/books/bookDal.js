// Dal: Data Access Layer
// Contains the functions that interact with the database
// Good because if you access the DB in multiple locations and you need to change the DB, you only need to change the DAL
// eg, swtiching from MongoDB to MySQL or PostgreSQL

import { bookModel } from './bookModel.js';

// ***** Basic CRUD operations *****
export async function getBooks() {
    return await bookModel.find();
}

export async function getBookById(id) {
    return await bookModel.findById(id);
}


export async function updateBook(id, book) {
    return await bookModel.findByIdAndUpdate(id, book, { new: true }); // new: true returns the modified document rather than the original
}

export async function createBook(book) {
    return await bookModel.create(book);
}

export async function deleteBook(id) {
    return await bookModel.findByIdAndDelete(id);
}

// ***** Additional operations *****

export async function searchBooks(title) {
    return await bookModel.find({ title: { $regex: title, $options: 'i' } }); // i is for case-insensitive
}
