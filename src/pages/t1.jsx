import "../App.css";
import { useContext,createContext, useEffect, useState } from "react";
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

import { AddEducation } from "../components/AddEducation";
export const UserInputs = createContext();
export const T1 = () =>{
   const {fly, setFly} = useContext(AppContext);
   useEffect(()=>{
    setFly("hidden w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
   })
   const [fName, setFname] = useState("Stephen Col");
   const [title, setTitle ] = useState("Web Developer");
   const [address, setAddress] = useState("21, Texas Street, USA");
   const [email, setEmail] = useState("example@example.com");
   const [weblink, setWeblink] = useState("yourname.com");
   const [phoneNumber, setPhoneNumber] = useState("+234-816-173-6593");
//    const[count, setCount] = useState(1);
  
    return(
        <>
            <section className="w-full flex flex-row relative">
                <section className="w-[45%] bg-gray-500 h-fit p-6">
                    <UserInputs.Provider value={{fName, title, address, email, weblink, phoneNumber}}>
                        <DocSide1></DocSide1>
                    </UserInputs.Provider>
                    
                </section>
                <section className="w-[55%] pl-4 pb-5 h-auto">
                    <section className="fixed z-50 bg-white border-l-4 drop-shadow-md p-3 border-blue-600 flex flex-row">
                        <div className="text-sm w-[70%]">
                            <p >Fill all required fields and click download CV to get started. Where fields are not adequate, fill in with your most outstanding/most recent accomplishments.</p>
                        </div>
                        
                        <button className="w-fit flex flex-row mx-4 items-center justify-center px-4 rounded-md text-white h-10 bg-blue-600">Download CV</button>
                       
                    </section>
                    <header className="p-4 pt-24">
                        <h1 className="text-blue-600 text-2xl font-semibold">Personal Info</h1>
                    </header>
                    <div className="bg-white drop-shadow-md p-4 grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Full Name:</label>
                            <input type="text" placeholder="Enter full name" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e)=>{
                                setFname(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Job Title:</label>
                            <input type="text" placeholder="Enter job" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setTitle(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Address:</label>
                            <input type="text" placeholder="Enter your address" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setAddress(e.target.value)
                            }}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Email:</label>
                            <input type="text" placeholder="Enter your email" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Website Link:</label>
                            <input type="text" placeholder="Enter your website link" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setWeblink(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Phone Number:</label>
                            <input type="text" placeholder="Enter your phone number" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setPhoneNumber(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="bio">Your bio:</label>
                            <textarea name="bio" placeholder="Bio" id="bio" cols="30" rows="10" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"></textarea>
                        </div>
                    </div>
                    <header className="p-4 pt-24">
                        <h1 className="text-blue-600 text-2xl font-semibold">Add Education</h1>
                    </header>
                    <div className="bg-white drop-shadow-md p-4 flex flex-col gap-3" >
                        <button className="flex flex-row items-center justify-center bg-blue-600 text-white w-fit px-4 text-sm rounded-md h-10">Add Education</button>
                    </div>
                    <header className="p-4 pt-24">
                        <h1 className="text-blue-600 text-2xl font-semibold">Add Experience</h1>
                    </header>
                    <div className="bg-white drop-shadow-md p-4 flex flex-col gap-3" >
                        <div className="flex flex-col">
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder="E.g BSc., B.Eng." className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="company">Company:</label>
                            <input type="text" placeholder="Enter job" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="start">Start:</label>
                            <input type="text" placeholder="Enter your address" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="finish">Finish:</label>
                            <input type="text" placeholder="Enter your email" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <button className="flex flex-row items-center justify-center bg-blue-600 text-white w-fit px-4 text-sm rounded-md h-10">Add Another Experience</button>
                    </div>
                    <header className="p-4 pt-24">
                        <h1 className="text-blue-600 text-2xl font-semibold">Add Skills</h1>
                    </header>
                    <div className="bg-white drop-shadow-md p-4 flex flex-col gap-3" >
                        <div className="flex flex-col">
                            <label htmlFor="skill">Skill:</label>
                            <input type="text" placeholder="E.g BSc., B.Eng." className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="school">Proficiency:</label>
                            <input type="text" placeholder="Enter job" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                       
                        <button className="flex flex-row items-center justify-center bg-blue-600 text-white w-fit px-4 text-sm rounded-md h-10">Add Another Skill</button>
                    </div>
                    <header className="p-4 pt-24">
                        <h1 className="text-blue-600 text-2xl font-semibold">Add Socials</h1>
                    </header>
                    <div className="bg-white drop-shadow-md p-4 flex flex-col gap-3" >
                        <div className="flex flex-col">
                            <label htmlFor="skill">Social Network:</label>
                            <input type="text" placeholder="E.g BSc., B.Eng." className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="school">Social Link</label>
                            <input type="text" placeholder="Enter job" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                       
                        <button className="flex flex-row items-center justify-center bg-blue-600 text-white w-fit px-4 text-sm rounded-md h-10">Add Another Social</button>
                    </div>
                </section>
            </section>
        </>
    )
}