import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Home = ({ setIsUser }) => {
    const [auth, setAuth] = useState('login');
    const isUser = sessionStorage.getItem('isUser');

    const navigate = useNavigate();
    let from = "/";

    useEffect(() => {
        if (isUser) {
            navigate(from, { replace: true });
        }
    }, [isUser, navigate, from]);

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