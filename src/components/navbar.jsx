import { Link } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import { GiHamburgerMenu} from "react-icons/gi"
import { AppContext } from "../App";

export const Navbar = (props) =>{
    const { fly, setFly} = useContext(AppContext)
   
    return(
        <>
            <nav className={fly}>
                <header className="uppercase font-semibold text-xl mr-auto">  
                    <Link to="/">Resume builder</Link>
                </header>
                <span>
                <Link to="/" className="uppercase mx-4 font-bold hover:text-blue-600">HOME</Link>
                <Link to="/about" className="uppercase mx-4 font-bold hover:text-blue-600">about us</Link>
                <Link to="/templates" className="uppercase mx-4 font-bold hover:text-blue-600">templates</Link>
                <Link to="contact" className="uppercase mx-4 font-bold hover:text-blue-600">Contact</Link>
                <Link className="uppercase mx-4 font-light ">
                    <button className="bg-blue-600 stylus text-sm p-2 px-4 uppercase rounded-md text-white">login</button>
                </Link>
                <Link className="uppercase mx-4 font-light">
                    <button className="bg-blue-600 stylus text-sm p-2 px-4 uppercase rounded-md text-white">Sign Up</button>
                </Link>
                </span>
                <span>
                    <GiHamburgerMenu></GiHamburgerMenu>
                </span>
            </nav>
        </>
    )
}