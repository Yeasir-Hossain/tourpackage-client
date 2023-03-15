import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
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
            <div className="navbar-start  font-semibold">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            menu.map((item, index) => <li key={index}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl">Tour is on</Link>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {
                            menu.map((item, index) => <li>
                                <Link href={item.link}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>

            <div className="navbar-end space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                <div class="chat-image avatar">
                    <div class="w-10">
                        <Image className='rounded-full' src="/images/stock/photo-1534528741775-53994a69daeb.jpg" fill />
                    </div>
                </div>
                <div>
                    <button className='btn-primary p-2 rounded-md'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;