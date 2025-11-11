import React from 'react';

const Navbar = () => {
    return (

        <div className="drawer ">

            <input id="my-drawer" type="checkbox" className="drawer-toggle" />


            <div className="drawer-content">
                <div className="navbar bg-white shadow-sm px-4 max-w-[1200] mx-auto">
                    <div className="flex-1">

                        <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>


                        <a className="btn btn-ghost text-black text-xl font-bold">CS — Ticket System</a>
                    </div>


                    <div className="flex-none hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 items-center space-x-2">
                            <li><a className="link link-hover">Home</a></li>
                            <li><a className="link link-hover">FAQ</a></li>
                            <li><a className="link link-hover">Changelog</a></li>
                            <li><a className="link link-hover">Blog</a></li>
                            <li><a className="link link-hover">Download</a></li>
                            <li><a className="link link-hover">Contact</a></li>


                            <li>
                                <button className='btn bg-gradient-to-r from-[#6e37e6] to-[#9f63f2] text-white font-bold hover:from-[#572AB3] hover:to-[#854ECC] border-none shadow-lg'>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    New Ticket
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>


            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    <li><a className="link link-hover">Home</a></li>
                    <li><a className="link link-hover">FAQ</a></li>
                    <li><a className="link link-hover">Changelog</a></li>
                    <li><a className="link link-hover">Blog</a></li>
                    <li><a className="link link-hover">Download</a></li>
                    <li><a className="link link-hover">Contact</a></li>
                    <div className="divider"></div>


                    <li>
                        <button className='btn bg-gradient-to-r from-[#6e37e6] to-[#9f63f2] text-white font-bold hover:from-[#572AB3] hover:to-[#854ECC] border-none shadow-lg w-full justify-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            New Ticket
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;