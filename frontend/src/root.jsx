import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import SigninPage from './pages/SigninPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// import React from 'react' // (importing the React library)
// import ReactDOM from 'react-dom/client'// (import ReactDOM from 'react-dom' (This can also work to import the ReactDOM)
// import './App.css'// (Importing the files from the CSS file)
// import { Nav, Counter } from './Navigate.jsx'// (Importing the Navigate & Counter file from the Navigate.jsx file)





// // Rendering the components to the root element - the root element is styled in app.css
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Nav />
//     <Counter />
//   </React.StrictMode>,
// )
