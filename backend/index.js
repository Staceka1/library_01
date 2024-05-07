import express from 'express'; // importing the express library
import { bookRouter } from './books/bookRouter.js'; // importing the bookRouter from the bookRouter.js file
import dotenv from 'dotenv'; // importing the dotenv librar

import mongoose from 'mongoose';
import { userRouter } from './users/userRouter.js';

dotenv.config(); // This loads the environment variables from the .env file

const mongouri = process.env.MONGODB_URI; // setting the mongouri to the MONGO_URI in the .env file

mongoose
    .connect(mongouri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connection established'))
    .catch((err) => console.error('MongoDB connection error:', err));




const app = express(); // creating an instance of the express library
const port = 3000; // setting the port to 3000
app.use(express.json()); // Middleware to parse JSON bodies


//ENDPOINTS
// This creates an endpoint that returns the string 'Hello World!' when the / route is accessed
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// This creates an endpoint that returns the string 'Health' when the /health route is accessed
app.get('/health', (req, res) => {
    res.send('Health');
});

app.use('/books', bookRouter); // using the bookRouter when the /books route is accessed
app.use ('/users', userRouter); // using the userModel when the /users route is accessed

//PORT & EXPRESS
// This is using Express and the PORT to run the application
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}
    `);
});



// Now we use Insomnia to check the console log. etc to see if the server is running

