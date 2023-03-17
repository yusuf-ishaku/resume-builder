import { useState, useEffect, useContext } from "react";
import App, { AppContext } from "../App";
import { ColorLine } from "./color-line";
export const LinkPaths = (props)  =>{
    const { fly, setFly} = useContext(AppContext)
    
    useEffect(()=>{
        setFly(false)
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
            </section>
        </>
    )
}