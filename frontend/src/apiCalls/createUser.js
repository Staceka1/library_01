export async function createUser(name, email, password) {
  console.log('createUser()', name, email, password);
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  console.log('url:', url)
  const body = JSON.stringify({ name, email, password }); // Make sure parameters are in the correct order if needed
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Correctly handle the JSON response
    const data = await response.json();

    // expect {
    // 	"user": {
    // 		"name": "n3a4m5e",
    // 		"password": "pass3wor4d",
    // 		"email": "ema54il@g.com"
    // 	},
    // 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7fSwiaWF0IjoxNzE1MjM4OTIwLCJleHAiOjE3MTUyNDYxMjB9.8BAsmPanVrg8jyUvIQ-KIIKWxb0vgM1t4bBMXsOw9GA"
    // }

    const user = data.user;
    const token = data.token;

    if (!token) {
      // something went wrong  {
      return null;
    }

    // set token to local storage
    localStorage.setItem('token', token);

    return user;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
