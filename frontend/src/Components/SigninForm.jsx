import  { useState } from 'react'
import { loginUser } from '../apiCalls/loginUser'


function SigninForm() {
        const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleClicked(e) {
        e.preventDefault();
        console.log(email, password)
        await loginUser(email, password)
    }

    return (
        <form>
            <h1>Login</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button
            onClick={handleClicked}
            >Login</button>
        </form>
    )
}

export default SigninForm