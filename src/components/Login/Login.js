import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>please log in!</h2>
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