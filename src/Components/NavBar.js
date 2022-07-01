import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ total }) => {

    const isUser = sessionStorage.getItem('isUser');

    const handleLogout = () => {
        sessionStorage.removeItem('isUser');
        localStorage.removeItem('secretToken');
    }

    return (
        <div className="navbar bg-accent">
            <div className="navbar-start">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Power Hack</Link>
            </div>
            <div className="navbar-end">
                {
                    isUser && <>
                        <Link className='btn btn-accent text-xl normal-case' to={'/billing'}>Billing</Link>
                        <Link onClick={handleLogout} className='btn btn-accent text-xl normal-case' to={'/billing'}>Logout</Link>
                    </>
                }
                <p className=' text-xl font-bold mr-5'>Paid Total:
                    <span>{total}</span>
                </p>
            </div>
        </div>
    );
};

export default NavBar;