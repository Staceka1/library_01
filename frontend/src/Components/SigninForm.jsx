import  { useState } from 'react'
import { loginUser } from '../apiCalls/loginUser'
// import youXlogo from '/youx.svg';

function SigninForm() {
        const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleClicked(e) {
        e.preventDefault();
        console.log(email, password)
        await loginUser(email, password)
    }

    return (
      <form className='signin'>
        {/* <img
          src={youXlogo}
          alt='youXlogo'
          style={{ width: '110px', height: 'auto' }}
        /> */}
        <h1>Welcome Back</h1>
        <p className='signinlingo'>
          Login now to enjoy youXlibrary. If you'd like to sign up, just hit the
          button and follow the prompts.
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
          onClick={handleClicked}
          style={{ margin: '0 80px' }}
        >
          Forgot Password?
        </button>

        <button
          className='login'
          onClick={handleClicked}
        >
          Login
        </button>
        <button
          className='signup'
          onClick={handleClicked}
        >
          Sign Up
        </button>
      </form>
    );
}

export default SigninForm;

