import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
    const [auth, setAuth] = useState('login');
    return (
        <div>
            <h2 className=' text-center text-2xl font-bold mt-12'>Welcome come to <span className=' text-4xl'>Power Hack</span> Billing Portal</h2>
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