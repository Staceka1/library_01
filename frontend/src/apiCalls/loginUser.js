export async function loginUser(email, password) {
  console.log('loginUser()', email, password);
  const url = `${import.meta.env.VITE_BASE_URL}/users/login`;
  const body = JSON.stringify({ email, password }); // Make sure parameters are in the correct order if needed
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

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
