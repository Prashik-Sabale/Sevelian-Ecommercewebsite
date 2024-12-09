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
      <div>

      </div>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold hover:text-primary">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
      <div className='grid grid-cols-2 mt-44'>
        <button className=' text-black' ><PiUser size={25} /></button>
        <Link to="/Login"><span className=" pt-2">Log in</span></Link>
      </div>
    </>
  );
};

export default NavLinks;
