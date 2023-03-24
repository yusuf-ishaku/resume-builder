import { LinkPaths } from "../components/linkpaths"
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { ColorLine } from "../components/color-line";
import TCVS from "../assets/cv.png";
import CT from "../assets/custom.png";
import D1 from "../assets/d1.png";
import D2 from "../assets/d2.png";
import D3 from "../assets/d3.png";
import F1 from "../assets/f1.png";
import F2 from "../assets/f2.png";
import F3 from "../assets/f3.png";
import F4 from "../assets/f4.png";
import F5 from "../assets/f5.png";
import F6 from "../assets/f6.png";
import { Desc } from "../components/desc";
export const Templates = () =>{
    const {fly, setFly} = useContext(AppContext);
    useEffect(() =>{
        setFly("w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
        console.log(fly)
    })
    return(
        <>
            <LinkPaths tag="Our Templates" inner = {<>
                <section className="mt-10 mb-10 pt-10 pb-32 h-fit px-32 bg-white">
                    <header className="text-center flex flex-col items-center">
                        <ColorLine></ColorLine>
                        <h2 className="text-blue-900 font-bold text-4xl">Our Creative Templates</h2>
                        <p className="text-xl mx-48 my-4 font-medium leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </header>
                    <section className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-col h-[500px] st  bg-white drop-shadow-xl border-white md:w-[30%] border-6">
                            <div className="bg-red-900 cursor-pointer h-[82%]">

                            </div>
                            <div className="h-[18%] px-4 flex flex-row items-center justify-between">
                                <button className="stylin border-blue-600 p-2 px-2 text-white text-lg rounded-3xl bg-blue-600">See template</button>
                                <button className="stylin border-blue-600 border-2 border-3 text-lg p-2 px-2 rounded-3xl bg-white">Use Template</button>
                            </div>
                        </div>
                        <div className="flex flex-col st h-[500px] md:w-[30%] border-white drop-shadow-xl bg-white w-auto border-6">
                            <div className="bg-red-900 cursor-pointer h-[82%]">

                            </div>
                            <div className="h-[18%] px-4 flex flex-row items-center justify-between">
                                <button className="stylin border-blue-600 p-2 px-2 text-white text-md rounded-3xl bg-blue-600">See template</button>
                                <button className="stylin border-blue-600 border-2 border-3 text-lg p-2 px-4 rounded-3xl bg-white">Use Template</button>
                            </div>
                        </div>
                        <div className="flex flex-col st h-[500px] md:w-[30%] border-white drop-shadow-xl bg-white w-auto border-6">
                            <div className="bg-red-900 cursor-pointer h-[82%]">

                            </div>
                            <div className="h-[18%] px-4 flex flex-row items-center justify-between">
                                <button className="stylin border-blue-600 p-2 px-2 text-white text-md rounded-3xl bg-blue-600">See template</button>
                                <button className="stylin border-blue-600 border-2 border-3 text-lg p-2 px-4 rounded-3xl bg-white">Use Template</button>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="w-full h-auto mt-10 mb-80">
                    <header className="text-center flex flex-col items-center">
                        <ColorLine></ColorLine>
                        <h2 className="text-blue-900 text-4xl font-extrabold">Our Main Features</h2>
                        <article className="mx-56 px-16 w-auto">
                            <p className="text-xl text-slate-600  leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                            </p>
                        </article>
                    </header>
                    <section className="w-full h-[90vh] grid grid-cols-3 gap-8 px-32 py-16">
                        <Desc img={F1} header="Proven Templates to increase hiring chance" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F2} header="Creative, Modern and Clean Templates Design" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F3} header="Easy and Intuitive Online CV and Resume Builder" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F4} header="Free to use. Developed by hiring professionals." text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F5} header="Recruiter Approved Phrases with Module Notification" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F6} header="Fast Easy CV and Resume Formatting" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                    </section>
                </section></>}></LinkPaths>
                
        </>
    )
}