import express from 'express'; // Importing the express library
import dotenv from 'dotenv'; // Importing the dotenv library
import mongoose from 'mongoose';
import cors from 'cors'; // Import CORS package

import { bookRouter } from './books/bookRouter.js'; // Importing the bookRouter
import { userRouter } from './users/userRouter.js'; // Importing the userRouter

dotenv.config(); // This loads the environment variables from the .env file

const mongouri = process.env.MONGODB_URI; // Setting the MongoDB URI from .env

mongoose
  .connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express(); // Creating an instance of the express library
const port = 3000; // Setting the port to 3000

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes and origins

// Optionally, you can configure CORS for specific origins
// app.use(cors({
//     origin: 'http://localhost:5173' // Only allow this origin to access resources
// }));

// Endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) => {
  res.send('Health');
});

app.use('/books', bookRouter); // Using the bookRouter when the /books route is accessed
app.use('/users', userRouter); // Using the userRouter when the /users route is accessed

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
