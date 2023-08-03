import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import { GiHamburgerMenu} from "react-icons/gi"
import { AppContext } from "../App";

export const Navbar = (props) =>{
    const { fly, setFly} = useContext(AppContext)
   
    return(
        <>
            <nav className={fly}>
                <header className="uppercase font-semibold md:text-md lg:text-xl mr-auto">  
                    <Link to="/">RB</Link>
                </header>
                <span className="hidden sm:inline ">
                    <NavLink to="/" className="uppercase mx-1 text-sm font-bold hover:text-blue-600">HOME</NavLink>
                    <NavLink to="/about" className="uppercase mx-1 text-sm font-bold hover:text-blue-600">About us</NavLink>
                    <NavLink to="/templates" className="uppercase mx-1 text-sm font-bold hover:text-blue-600">templates</NavLink>
                    <NavLink to="contact" className="uppercase mx-1 text-sm font-bold hover:text-blue-600">Contact</NavLink>
                    <Link className="uppercase mx-1 font-light ">
                        <button className="bg-blue-600  text-sm p-1 px-2 uppercase rounded-md text-white">login</button>
                    </Link>
                    <Link className="uppercase mx-1 font-light">
                        <button className="bg-blue-600 text-sm p-1 px-2 uppercase rounded-md text-white">Sign Up</button>
                    </Link>
                </span>
                <span className="sm:hidden">
                    <GiHamburgerMenu></GiHamburgerMenu>
                </span>
            </nav>
        </>
    )
}