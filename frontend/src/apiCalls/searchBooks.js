export async function searchBooks(bookName) {
  const url = `${process.env.BASE_URL}/books`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = {
title: bookName
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
