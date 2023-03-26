import "../App.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import Ajoy from "../assets/ajoy.jpg"; 
import {MdLocationOn } from "react-icons/md";
import { MdLocalPhone} from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RxGlobe } from "react-icons/rx"; 
import { MdFacebook} from "react-icons/md";
import { RiTwitterFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri"
import { DocSide1 } from "../components/t1pdf";
export const T1 = () =>{
   const {fly, setFly} = useContext(AppContext);
   useEffect(()=>{
    setFly("hidden w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
   })
    return(
        <>
            <section className="w-full flex flex-row relative">
                <section className="w-[45%] bg-gray-500 h-fit p-6">
                    <DocSide1

                    ></DocSide1>
                </section>
                <section className="w-[55%] pl-4 h-auto">
                    <section className="bg-white border-l-4 drop-shadow-md p-3 border-blue-600 flex flex-row">
                        <div className="text-sm w-[70%]">
                            <p >Fill all required fields and click download CV to get started. Where fields are not adequate, fill in with your most outstanding/most recent accomplishments.</p>
                        </div>
                        
                        <button className="w-fit flex flex-row mx-4 items-center justify-center px-4 rounded-md text-white h-10 bg-blue-600">Download CV</button>
                       
                    </section>
                    <header className="p-4">
                        <h1 className="text-blue-600 text-2xl font-semibold">Personal Info</h1>
                    </header>
                    <div className="bg-white drop-shadow-md p-4 grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Full Name:</label>
                            <input type="text" placeholder="Enter full name" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Job Title:</label>
                            <input type="text" placeholder="Enter job" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Address:</label>
                            <input type="text" placeholder="Enter your address" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Email:</label>
                            <input type="text" placeholder="Enter your email" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Website Link:</label>
                            <input type="text" placeholder="Enter your website link" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Phone Number:</label>
                            <input type="text" placeholder="Enter your phone number" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="bio">Your bio:</label>
                            <textarea name="bio" placeholder="Bio" id="bio" cols="30" rows="10" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"></textarea>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}