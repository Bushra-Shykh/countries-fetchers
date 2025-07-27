import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../UI/Header.css";
import { CiMenuFries } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) 
  }
  return (
    <div>
      <header>
        <div className="container grid grid-cols-2 items-center">
          <NavLink to="/">
            <img src="/countries-fetcher-logo.png"  alt="Countries Fetcher" width={155} height={25} />
          </NavLink>
          <div className="menu" onClick={toggleMenu}>
              <CiMenuFries />
            </div>
          <nav>
            
            <ul className={isMenuOpen ? "navbarlink active" : "navbarlink"}>
              <li>
                <NavLink onClick={toggleMenu} to="/">Home <FaHome /></NavLink>  
              </li>
              <li>
                <NavLink onClick={toggleMenu} to="/about">About <AiFillAppstore /></NavLink>  
              </li>
              <li>
                <NavLink onClick={toggleMenu} to="/country">Country <CiFlag1 /></NavLink>  
              </li>
              <li>
                <NavLink onClick={toggleMenu} to="/contact">Contact <IoIosContact /></NavLink>  
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
