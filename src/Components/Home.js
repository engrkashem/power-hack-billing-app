import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
    const [auth, setAuth] = useState('login');
    return (
        <div>
            <h2>Welcome come to <span>Power Hack</span></h2>
            {
                auth === 'login' ?
                    <Login
                        setAuth={setAuth}
                    ></Login> :
                    <Register
                        setAuth={setAuth}
                    ></Register>
            }
        </div>
    );
};

export default Home;