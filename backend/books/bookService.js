// Service: Define functions that can be called
// If get all books had to be updated to be R18+ content restricted, the controller would not need to be updated
// We would only need to update the service
// Router => Location endpoint aka /books /book:id. Does not know what happens just where
// Controller => Takes in response, calls service, sends response back. Does not know what happens.
// Service => Logic of what happens / what to do. Does not know where it is called.
// Dal => Data Access Layer. Interacts with the database in one location.
// Model => Creates a model (aka folder) for the database. Does not know what the structure is (schema does that).
// Schema => Outlines the structure of the data

import {
    getBooks, getBookById,
    updateBook, createBook, deleteBook,
} from './bookdal.js';

export async function getBooksService() {
    return await getBooks();
}

export async function getBookByIdService(id) {
    return await getBookById(id);
}

export async function updateBookService(id, book) {
    return await updateBook(id, book);
}

export async function createBookService(book) {
    console.log(book, '****')
    return await createBook(book);
}

export async function deleteBookService(id) {
    return await deleteBook(id);
}
