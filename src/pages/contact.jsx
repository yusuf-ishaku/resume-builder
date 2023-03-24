import { LinkPaths } from "../components/linkpaths"
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { ColorLine } from "../components/color-line";

export const Contact = () =>{
    const {fly, setFly} = useContext(AppContext);
    useEffect(() =>{
        setFly("w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
        console.log(fly)
    })
    return(
        <>
            <LinkPaths tag="Contact Us" inner = {<>
            <ColorLine></ColorLine>
                </>}></LinkPaths>
                
        </>
    )
}