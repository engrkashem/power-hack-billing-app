import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div class="navbar bg-accent">
            <div class="navbar-start">
                <Link to={'/'} class="btn btn-ghost normal-case text-xl">Power Hack</Link>
            </div>
            <div class="navbar-end">
                <Link className='btn btn-accent text-xl normal-case' to={'/billing'}>Billing</Link>
                <p className=' text-xl font-bold mr-5'>Paid Total:
                    <span>00</span>
                </p>
            </div>
        </div>
    );
};

export default NavBar;