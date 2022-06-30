import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ isUser }) => {
    return (
        <div className="navbar bg-accent">
            <div className="navbar-start">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Power Hack</Link>
            </div>
            <div className="navbar-end">
                {
                    isUser && <Link className='btn btn-accent text-xl normal-case' to={'/billing'}>Billing</Link>
                }
                <p className=' text-xl font-bold mr-5'>Paid Total:
                    <span>00</span>
                </p>
            </div>
        </div>
    );
};

export default NavBar;