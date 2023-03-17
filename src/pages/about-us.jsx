import { LinkPaths } from "../components/linkpaths"
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { ColorLine } from "../components/color-line";
import TCVS from "../assets/cv.png";
import CT from "../assets/custom.png";
export const About = () =>{
    const {fly, setFly} = useContext(AppContext);
    useEffect(() =>{
        setFly(true)
        console.log(fly)
    })
    return(
        <>
            <LinkPaths tag="About Us" inner = {<><section className="w-full flex flex-row justify-between items-center h-[90vh] px-32 py-28">
                    <article className="w-1/2 flex flex-col justify-center">
                        <header className="text-blue-900 font-extrabold  text-4xl ">
                            <ColorLine></ColorLine>
                            We deliver the best
                        </header>
                        <section className="py-6">
                            <ul className="my-list text-xl font-bold">
                                <li className="list-inside h-16 leading-9 align-middle">Proven CV templates to increase hiring chance</li>
                                <li className="list-inside h-16 align-middle">Creative and clean design templates</li>
                                <li className="list-inside h-16 align-middle">Easy and intuitive online CV builder</li>
                                <li className="list-inside h-16 align-middle">Free to use. Designed by hiring professionals</li>
                                <li className="list-inside h-16 align-middle">Fast easy CV and resume formatting</li>
                                <li className="list-inside h-16 align-middle">Recruiter approved phrases</li>
                            </ul>
                        </section>
                    </article>
                    <figure className="w-1/2">
                        <img src={TCVS} alt="" />
                    </figure>
                </section>
                <section className="mx-32 flex pr-10 flex-row items-center justify-between rounded-xl overflow-hidden drop-shadow-2xl bg-white w-auto h-fit my-16">
                    <div className="">
                        <img src={CT} alt="" />
                    </div>
                    <article className="text-4xl text-blue-900 font-bold">
                        Do you need a custom CV template?
                    </article>
                    <button className="ml-4 w-fit border-4 rounded-md p-2 font-semibold text-2xl border-blue-800 text-blue-800">
                        Send a request
                    </button>
                </section></>}></LinkPaths>
        </>
    )
}