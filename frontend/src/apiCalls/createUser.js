export async function createUser(name, email, password) {
  console.log('createUser()', name, email, password);
  const url = 'http://localhost:3000/users';
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
    const createdUser = await response.json();
    console.log('Received data:', createdUser);

    const newId = createdUser._id;
    console.log('New user ID:', newId);

    if (newId) {
      console.log('User created successfully with ID:', newId);
    } else {
      console.log('User creation failed, no ID returned');
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
