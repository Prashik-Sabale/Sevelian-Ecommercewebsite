import React from 'react';
import logo from '../assets/images/logo.png';
import shorthand from '../assets/images/shorthand.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <footer className="bg-white m-4">
                    <div className="w-full max-w-screen-xl mx-auto md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <Link to="/Home" target='blank' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img src={shorthand} className="h-8" alt="Flowbite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black"><img src={logo} className="w-40" alt="" /></span>
                            </Link>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-black">
                                <li>
                                    <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm  sm:text-center text-black">© 2024 <Link to="/Home" target='blank' className="hover:underline">Sevelian™</Link>. All Rights Reserved.</span><br />
                        <h1>
                            Made with ❤ by <a href="https://github.com/Prashik-Sabale">Prashik</a>
                        </h1>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer