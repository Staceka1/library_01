export async function loginUser(username, password) {

    const url = 'http://localhost:3001/login';
    const body = JSON.stringify({ username, password });
    const headers = {
        'Content-Type': 'application/json',
    };

    // In the backend route I'm expecting if I talk to this endpoint it will respond with {
    // success: true/false
    // user: userobject from database with _id, name, wtv
    // JWTtoken: secretToken

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
    });

    const data = response.json();

    const { success, user, JWTtoken } = data;

    if (success) {
        localStorage.setItem('JWTtoken', JWTtoken);
        localStorage.setItem('user', JSON.stringify(user));
        return true
    }

    return false
}