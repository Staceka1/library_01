export async function getAllBooks() {
  // const url = 'http://localhost:3000/books';
  const url = `${import.meta.env.VITE_BASE_URL}/books`;
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
