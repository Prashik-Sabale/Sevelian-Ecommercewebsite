import React, { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import NavLinks from './NavLinks';

import { openTab } from '../../stores/cart';
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

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

    const [open, setOpen] = useState(false);
    // const [showModal, setshowModal] = useState(false);


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    return (
        <div>
            <div className=' w-full'>
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
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li
                                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                        <Link to="/products">Product</Link>
                                    </li>

                                    <li
                                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li
                                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    {/* <NavLinks /> */}
                                    <ul
                                        className={`fixed top-0 z-50 bg-black w-2/3 h-screen shadow-2xl
                                                md:hidden flex flex-col gap-10  p-7 pt-20 duration-500
                                                ${open ? "left-0" : "left-[-100%]"}`}
                                    >
                                        <NavLinks />
                                    </ul>
                                </ul>
                            </div>
                            <div className="hidden lg:flex lg:items-center gap-x-3">


                                <button onClick={() => dispatch(openTab())} className="flex items-center text-black  justify-center px-2 py-2 font-semibold"><IoSearch className='text-xl' /></button>

                                {/* {showModal && <Modal onclose={() => { setshowModal(false) }} />} */}

                                <button className="flex items-center text-black  justify-center px-2 py-2 font-semibold" ><Link to='./login'><FaRegUser className='text-xl' /></Link></button>

                                <div className=' relative cursor-pointer'  >
                                    <Link to='./cart'><IoBagOutline className='text-2xl' /></Link>
                                    <div className=' absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-4px] flex items-center justify-center text-[9px] bg-black text-white'>{totalQuantity}</div>
                                </div>
                            </div>


                            {/* Mobile Nav */}
                            <ul
                                className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
                                        md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
                                        ${open ? "left-0" : "left-[-100%]"}`}
                            >
                                <NavLinks />
                            </ul>
                            <div className="flex items-center justify-center gap-3 lg:hidden">
                                <IoSearch size={25} onClick={() => dispatch(openTab())} className='text-xl ' />
                                <button onClick={() => setOpen(!open)} >{open ? <RxCross2 size={30} /> : <HiOutlineMenuAlt3 size={30} className='cursor-pointer' />}</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar