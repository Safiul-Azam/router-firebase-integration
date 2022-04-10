import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>please log in!</h2>
            <div style={{margin:'20px'}}>
                <button onClick={()=>signInWithGoogle()}>Google+ sign in</button>
            </div>
            <form>
            <input type="email" placeholder='Your Email' />
            <br />
            <input type="password" placeholder='Your Password' />
            <br />
            <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Login;