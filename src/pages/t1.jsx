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
export const T1 = () =>{
   const {fly, setFly} = useContext(AppContext);
   useEffect(()=>{
    setFly("hidden w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
   })
    return(
        <>
            <section className="w-full flex flex-row relative">
                <section className="w-[45%] bg-gray-500 h-fit p-6">
                    <section className="bg-white w-auto h-fit flex flex-row">
                        <section className="w-[45%] bg-blue-400 h-fit">
                            <img src={Ajoy} alt=""></img>
                            <span className="block pt-2 px-1 pl-2">
                                <h1 className="text-white font-semibold text-xl uppercase">{"Stephen Colbert"}</h1>
                            </span>
                            <span className="block pt-1 px-1 pl-2">
                                <h2 className="text-gray-700 font-semibold text-md uppercase">{"Web Developer"}</h2>
                            </span>
                            <div className="flex flex-col gap-4 p-2 pl-4">
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
                                    <h1 className="text-white text-sm">+234-816-173-6593</h1>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdEmail></MdEmail>
                                    </span>
                                    <h1 className="text-white text-sm">example@example.com</h1>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <RxGlobe></RxGlobe>
                                    </span>
                                    <h1 className="text-white text-sm">www.yourdomain.com</h1>
                                </div>
                            </div>
                            <hr className="mx-2 my-2"></hr>
                            <span className="block pt-2 px-1 pl-4">
                                <h1 className="text-white font-semibold text-lg uppercase">{"Skills"}</h1>
                            </span>
                            <div className="flex flex-col gap-0 p-2 pl-4">
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
                            <hr className="mx-2 my-2" />
                            <span className="block pt-2 px-1 pl-4">
                                <h1 className="text-white font-semibold text-lg uppercase">{"Socials"}</h1>
                            </span>
                            <div className="flex flex-col gap-4 p-2 pl-4">
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-8 mr-3 h-8 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdFacebook></MdFacebook>
                                    </span>
                                    <span className="flex flex-col">
                                        <h1 className="text-white text-md font-semibold">Facebook</h1>
                                        <h3 className="text-white text-xs">yourname@facebook</h3>
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <RiTwitterFill></RiTwitterFill>
                                    </span>
                                    <span className="flex flex-col">
                                        <h1 className="text-white text-md font-semibold">Twitter</h1>
                                        <h3 className="text-white text-xs">yourname@twitter</h3>
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <RiYoutubeFill></RiYoutubeFill>
                                    </span>
                                    <span className="flex flex-col">
                                        <h1 className="text-white text-md font-semibold">Youtube</h1>
                                        <h3 className="text-white text-xs">yourname@youtube</h3>
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <RiLinkedinFill></RiLinkedinFill>
                                    </span>
                                    <span className="flex flex-col">
                                        <h1 className="text-white text-md font-semibold">Youtube</h1>
                                        <h3 className="text-white text-xs">yourname@youtube</h3>
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white p-4">
                            <section>
                                <header className="text-md mb-2 text-blue-400 uppercase font-semibold">
                                    <h1>
                                    About
                                    </h1>
                                </header>
                                <article>
                                    <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                </article>
                            </section>
                            <hr className="bg-blue-400 my-3 mx-1 h-[0.1rem]" />
                            <section>
                                <header className="text-md mb-2 text-blue-400 uppercase font-semibold">
                                    <h1>
                                    Work Experience
                                    </h1>
                                </header>
                                <section className="flex flex-col">
                                    <section className="flex flex-row">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[0.2rem] h-full relative bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>2019-2020</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">Lorem ipsum dolor sit amet.</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                                </p>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="flex flex-row ">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[0.2rem] h-full bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>2019-2020</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">Lorem ipsum dolor sit amet.</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                                </p>
                                            </article>
                                        </div>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>

                </section>
                <section className="w-[55%] bg-red-900 h-auto">

                </section>
            </section>
        </>
    )
}