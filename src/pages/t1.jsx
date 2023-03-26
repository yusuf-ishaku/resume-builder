import "../App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Ajoy from "../assets/ajoy.jpg"; 
import {MdLocationOn } from "react-icons/md"
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
                                    <span className="w-10 mr-3 h-10 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdLocationOn></MdLocationOn>
                                    </span>
                                    <h1 className="text-white">21 Street, Texas USA</h1>
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