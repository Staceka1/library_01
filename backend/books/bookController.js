import {
    getBooksService,
    getBookByIdService,
    updateBookService,
    createBookService,
    deleteBookService,
} from './bookService.js';

export async function getBooksController(req, res) {
    const books = await getBooksService();
    res.send(books);
}

export async function getBookByIdController(req, res) {
    try {
        const id = req.params.id;
        console.log(id)
        const book = await getBookByIdService(id);
        console.log('****', book);
        console.log('herre');
        res.send(book);
    } catch (error) {
                const id = req.params.id;
        console.log(id)

        console.log(error);
        res.send(error);
    }
}

export async function updateBookController(req, res) {
    const id = req.params.id;
    const book = req.body;
    const updatedBook = await updateBookService(id, book);
    res.send(updatedBook);
}

export async function createBookController(req, res) {
    try {
        const book = req.body;
        console.log(book, '****')
        const newBook = await createBookService(book);
        res.send(newBook);
    }

    catch (error) {
        console.log(error);
        res.send(error);
    };
}

export async function deleteBookController(req, res) {
    const id = req.params.id;
    const deletedBook = await deleteBookService(id);
    res.send(deletedBook);
}