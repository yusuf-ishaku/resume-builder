import "../App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Ajoy from "../assets/ajoy.jpg"
export const T1 = () =>{
   const {fly, setFly} = useContext(AppContext);
   useEffect(()=>{
    setFly("hidden w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
   })
    return(
        <>
            <section className="w-full flex flex-row relative">
                <section className="w-[40%] bg-gray-500 h-80 p-8">
                    <section className="bg-white w-auto h-fit">
                        <section className="w-[45%] bg-blue-400 h-fit">
                            <img src={Ajoy} alt=""></img>
                            <span className="block py-2 px-1 pl-2">
                                <h1 className="text-white text-xl uppercase">{"Stephen Colbert"}</h1>
                            </span>
                        </section>
                    </section>
                </section>
                <section className="w-[60%] bg-red-900 h-80">

                </section>
            </section>
        </>
    )
}