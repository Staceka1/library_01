import { useState } from 'react';
import youXfavicon from '/youxfavicon.svg';
import librarysvg from '/library.svg';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../apiCalls/createUser';

function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function
  const [error, setError] = useState(null); // [1

  async function handleSignup(e) {
    e.preventDefault();
    console.log('handleSignup()');
    console.log(fullName, email, password);
    const userResponse = await createUser(fullName, email, password);
    console.log('userResponse', userResponse);
    if (!userResponse) {
      setError('User creation failed');
      return;
    }
    navigate('/'); // Adjust the route as necessary
  }

  function handleLogin(e) {
    e.preventDefault();
    navigate('/signin'); // Adjust the route as necessary
  }

  return (
    <form className='signin'>
      <img
        className='librarylogo'
        src={librarysvg}
        alt='Library Logo'
      />
      <img
        className='youXfavicon'
        src={youXfavicon}
        alt='youXfavicon'
      />
      <h1>Welcome</h1>
      <p className='signuplingo'>
        Fill out the form below to create an account. This will give you access
        to the youXlibrary. If you already have an account, just hit the login
        button below.
      </p>
      <input
        className='fullname'
        type='text'
        placeholder='Full name'
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />
      <input
        className='emailaddress'
        type='text'
        placeholder='Email Address'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        className='signup'
        onClick={handleSignup}
      >
        Sign Up
      </button>
      <p>Already have an account?</p>
      <button
        className='login'
        onClick={handleLogin}
      >
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SignupForm;
