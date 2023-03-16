import auth from '@/firebase.config';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {

    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menu = [
        {
            name: "Create Packages", link: "/Create"
        },
        {
            name: "Tour Packages", link: "/Package"
        }
    ]
    return (
        <div className="navbar bg-base-100 bg-opacity-10 shadow-xl pb-3">
            <div className="navbar-start font-semibold">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            menu?.map((item, index) => <li key={index}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl">Tour is on</Link>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {
                            menu?.map((item, index) => <li>
                                <Link href={item.link}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>

            <div className="navbar-end space-x-1 lg:space-x-4">
                <div class="chat-image avatar">
                    <div class="w-10">
                        {user &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        }

                    </div>
                </div>
                <div>
                    {
                        user ?
                            <button onClick={logout} className='btn-primary p-2 rounded-md'>
                                Logout
                            </button> :
                            <button className='btn-primary p-2 rounded-md'>
                                <Link href="/Login">Login</Link>
                            </button>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;