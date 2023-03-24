import { useState, useEffect, useContext } from "react";
import App, { AppContext } from "../App";
import { GrFacebookOption, GrGoogle, GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
import { GrLinkedinOption} from "react-icons/gr";
import { ColorLine } from "./color-line";
import { IconContext } from "react-icons/lib";
export const LinkPaths = (props)  =>{
    const { fly, setFly} = useContext(AppContext)
    
    useEffect(()=>{
        setFly("w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
        console.log(fly)
    })
    return(
        <>
            <section>
                <section className="w-full hei flex flex-row top-0 items-center justify-center relative h-[500px] bg-red-400">
                    <header className="text-center">
                        <h1 className="text-5xl font-bold text-white">{props.tag}</h1>
                        <span className="block mt-3 text-white font-medium text-lg">
                            Home       /  {props.tag}
                        </span>
                    </header>
                    
                    
                </section>
                <section className="mt-16">
                    {props.inner}
                </section>
                <footer className="w-full flex py-5 mt-10 text-white justify-between px-20 flex-row gap-8 h-80 bg-blue-900">
                    <section className="w-[25%]">
                        <header className="font-semibold text-xl my-3">CV Builder</header>
                        <article className="mt-5">
                            <p className="leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.
                            </p>
                           
                        </article>
                        <figure className="flex flex-row gap-4 my-4">
                            <IconContext.Provider value={{color: "white", size: 18}}>
                                <span>
                                    <GrFacebookOption></GrFacebookOption>
                                </span>
                                <span>
                                    <BsTwitter></BsTwitter>
                                </span>
                                <span>
                                    <AiOutlineGooglePlus></AiOutlineGooglePlus>
                                </span>
                                <span>
                                    <GrInstagram></GrInstagram>
                                </span>
                                <span>
                                    <GrLinkedinOption></GrLinkedinOption>
                                </span>
                            </IconContext.Provider>
                           
                        </figure>
                    </section>
                    <section  className="w-[25%]">
                        <header className="uppercase font-semibold text-md my-3">Privacy and TOS</header>
                        <article>
                            <span className="block text-gray-300 hover:text-white">Advertiser Agreement</span>
                            <span className="block text-gray-300 hover:text-white">Acceptable Use Policy</span>
                            <span className="block text-gray-300 hover:text-white">Privacy Policy</span>
                            <span className="block text-gray-300 hover:text-white">Technology Privacy</span>
                            <span className="block text-gray-300 hover:text-white">Developer Agreement</span>          
                        </article>
                    </section>
                    <section  className="w-[20%]">
                        <header className="uppercase font-semibold text-md my-3">Navigate</header>
                        <article>
                            <span className="block text-gray-300 hover:text-white">Advertisers</span>
                            <span className="block text-gray-300 hover:text-white">Developers</span>
                            <span className="block text-gray-300 hover:text-white">Resources</span>
                            <span className="block text-gray-300 hover:text-white">Company</span>
                            <span className="block text-gray-300 hover:text-white">Connect</span>          
                        </article>
                    </section>
                    <section  className="w-[25%]">
                        <header className="uppercase font-semibold text-md my-3">Contact Us</header>
                        <article>
                            <p className="text-left text-white">
                                Mailing Address:xx00 E. Union Ave

                                Suite 1100. Denver, CO 80237

                                +999 90932 627

                                support@yourdomain.com</p>         
                        </article>
                    </section>
                </footer>
            </section>
        </>
    )
}