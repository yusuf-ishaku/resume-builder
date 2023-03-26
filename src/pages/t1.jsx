import "../App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Ajoy from "../assets/ajoy.jpg"; 
import {MdLocationOn } from "react-icons/md";
import { MdLocalPhone} from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RxGlobe } from "react-icons/rx";
export const T1 = () =>{
   const {fly, setFly} = useContext(AppContext);
   useEffect(()=>{
    setFly("hidden w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
   })
    return(
        <>
            <section className="w-full flex flex-row relative">
                <section className="w-[45%] bg-gray-500 h-fit p-6">
                    <section className="bg-white w-auto h-fit">
                        <section className="w-[45%] bg-blue-400 h-fit">
                            <img src={Ajoy} alt=""></img>
                            <span className="block pt-2 px-1 pl-2">
                                <h1 className="text-white font-semibold text-xl uppercase">{"Stephen Colbert"}</h1>
                            </span>
                            <span className="block pt-1 px-1 pl-2">
                                <h2 className="text-gray-700 font-semibold text-md uppercase">{"Web Developer"}</h2>
                            </span>
                            <div className="flex flex-col gap-4 p-2">
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdLocationOn></MdLocationOn>
                                    </span>
                                    <h1 className="text-white">21 Street, Texas USA</h1>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdLocalPhone></MdLocalPhone>
                                    </span>
                                    <h1 className="text-white">+234-816-173-6593</h1>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdEmail></MdEmail>
                                    </span>
                                    <h1 className="text-white">example@example.com</h1>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <RxGlobe></RxGlobe>
                                    </span>
                                    <h1 className="text-white">www.yourdomain.com</h1>
                                </div>
                            </div>
                            <hr className="mx-2"></hr>
                            <span className="block pt-2 px-1 pl-2">
                                <h1 className="text-white font-semibold text-lg uppercase">{"Skills"}</h1>
                            </span>
                            <div className="flex flex-col gap-0 p-2">
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        HTML
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[70%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        70%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        CSS
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[50%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        50%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        JS
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[60%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        60%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        JQuery
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[90%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        90%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        SASS
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[75%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        75%
                                    </span>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="w-[55%] bg-red-900 h-auto">

                </section>
            </section>
        </>
    )
}