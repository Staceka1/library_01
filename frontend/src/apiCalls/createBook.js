export async function createBook(title, author) {

    const url = 'http://localhost:3001/books';
    const body = JSON.stringify({ title, author });
         const JWTToken =   localStorage.getItem('JWTtoken');
 const headers = {
     'Content-Type': 'application/json',
     'Authorisation': JWTToken
    };

    // In the backend route I'm expecting if I talk to this endpoint it will respond with {
    // success: true/false
    // book: bookObject from database with _id, title

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
    });

    const data = response.json();

    const { success, book } = data;

    if (!success) {
        localStorage.removeItem('JWTtoken'); // Assuming that the token is invalid if the request is not successful
        return
    }

    return book;
}