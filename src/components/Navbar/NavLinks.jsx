import React, { useState } from "react";
import { PiUser } from "react-icons/pi";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const Links = [
    {
      name: "Home",
      link: "/Home",
    },
    {
      name: "Product",
      link: "/Products",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Cart",
      link: "/cart",
    },

  ];

  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold text-xl hover:text-primary">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
      <div className='grid grid-cols-2 mt-auto'>
        <PiUser size={28} />
        <Link to="/Login"><button className="w-full bg-black  text-white py-2 px-4 hover:bg-gray-800 transition-all duration-200">
          Log in
        </button></Link>
      </div>
    </>
  );
};

export default NavLinks;
