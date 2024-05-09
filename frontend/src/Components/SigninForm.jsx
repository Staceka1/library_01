import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { loginUser } from '../apiCalls/loginUser';
import youXfavicon from '/youxfavicon.svg';
import librarysvg from '/library.svg';

function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  async function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
    const userResponse = await loginUser(email, password);
    console.log('userResponse', userResponse);
    if (!userResponse) {
      return;
    }
    navigate('/'); // Adjust the route as necessary
  }

  function handleSignup(e) {
    e.preventDefault();
    navigate('/signup'); // Navigate to the signup page
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
      <h1>Welcome Back</h1>
      <p className='signinlingo'>
        Login now to enjoy the youXlibrary. If you'd like to sign up, just hit
        the button and follow the prompts.
      </p>
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
        className='forgotPassword'
        onClick={handleLogin}
        style={{ margin: '0 80px' }}
      >
        Forgot Password?
      </button>

      <button
        className='login'
        onClick={handleLogin}
      >
        Login
      </button>
      <p>Don't have an account?</p>
      <button
        className='signup'
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SigninForm;
