import React, { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {

    // *********************AddToCart************************************
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])



    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    return (
        <div>
            <div className='main w-full  '>
                <div className='container '>
                    <div className="header__bar bg-black text-white">
                        <marquee scrollamount="10">
                            <pre>AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500                                                    AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500                                                      AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500  </pre>
                        </marquee>
                    </div>
                    <div className="top-0 py-1 z-50  sticky  lg:py-2 w-full  lg:relative ">
                        <nav className={`${scroll ? "fixed bg-white w-full  rounded-full  top-5 left-0 right-0 " : ""}z-10 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4`}>
                            <div className="flex  items-center justify-between">
                                <button>
                                    <div className="flex items-center space-x-2">
                                        <Link to='/'><img src={logo} className="w-40" alt="" /></Link>
                                    </div>
                                </button>
                                <div className="hidden lg:block">
                                    <ul className="flex space-x-10 text-base font-bold text-black ">
                                        <li
                                            className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/Home">Home</Link>
                                        </li>
                                        <li
                                            className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/Products">Product</Link>
                                        </li>

                                        <li
                                            className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li
                                            className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hidden lg:flex lg:items-center gap-x-3">

                                    <button className="flex items-center text-black  justify-center px-2 py-2 font-semibold"><IoSearch className='text-xl' /></button>

                                    {/* {showModal && <Modal onclose={() => { setshowModal(false) }} />} */}

                                    <button className="flex items-center text-black  justify-center px-2 py-2 font-semibold" ><Link to='./Login'><FaRegUser className='text-xl' /></Link></button>

                                    <div className=' relative cursor-pointer'  >
                                        <Link to='./cart'><IoBagOutline className='text-2xl' /></Link>
                                        <div className=' absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-4px] flex items-center justify-center text-[9px] bg-black text-white'>{totalQuantity}</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center lg:hidden">
                                    <button className="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 :outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar