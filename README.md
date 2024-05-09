# library_01

youXlibrary


Technologies Used:
# React + Vite
# Mongo DB
# Material UI
# Nodemon


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




When typing into back-end JSON file and adding "dev"
The type: modules is used which will allow to use the syntax import instead of require.


npm install nodemon -
this will allow the server to restart automicatically when a change has been made.


GraphQL & Apollo servers -
npm install @apollo/server graphql



1. create schema
2. creat a rseolbver
3. Main file - will have to do both ends. (client file - calls the backend) apollo-client.js add as a dependency

4.

PLugin - Better comments
// !!!! This is a bad idea because it exposes the password hash (Red)
// ? Should we hash the password here? (blue)
// ***** Additional operations ***** (Green)
// todo: add a function to get a user by email (orange)
// normal (grey)




In Backend
There is a /users/create endpoint
1. Create a user in the DB
2. Create a JWT token
3. Return the token and the new user

There is also a /users/signin endpoint
1. Validate the username & password
2. If valid, Create a JWT token
3. If valid, Return the token and the new user

Say we have a POST /book/create route (eg, create a book) that is only available to logged in users
1. The create payload should be the schema of a book (as normal) (eg, title, image, description, author)
2. Also in that payload in the headers should be the authorisationToken: JWTsecret
3. In the routes for /book/create before the controller, we call the checkIsAuthorised middleware
4. This validates the authorisationToken: JWTsecret:
    - A. Exists
    - B. Is valid
    - C. Is not expired
    - D. Anything else ? (eg, userType is Admin) (if only admins were allowed to create books)
    - E. Returns error if any of the above are not true
    - F. If all good, proceed to controller.
5. Continue as normal in the controller (eg, call service).

