import "../App.css";
import { useContext, useEffect } from "react";
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
                    <DocSide1></DocSide1>
                </section>
                <section className="w-[55%] pl-4 h-auto">
                    <section className="bg-white border-l-4 drop-shadow-lg p-3 border-blue-600 flex flex-row">
                        <div className="text-sm w-[70%]">
                            <p >Fill all required fields and click download CV to get started. Where fields are not adequate, fill in with your most outstanding/most recent accomplishments.</p>
                        </div>
                        
                            <button className="w-fit flex flex-row mx-4 items-center justify-center px-4 rounded-md text-white h-10 bg-blue-600">Download CV</button>
                       
                    </section>
                   
                </section>
            </section>
        </>
    )
}