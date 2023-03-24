import { LinkPaths } from "../components/linkpaths"
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { ColorLine } from "../components/color-line";
import TCVS from "../assets/cv.png";
import CT from "../assets/custom.png";
import D1 from "../assets/d1.png";
import D2 from "../assets/d2.png";
import D3 from "../assets/d3.png";
export const About = () =>{
    const {fly, setFly} = useContext(AppContext);
    useEffect(() =>{
        setFly("w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent")
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
                <section className="w-full h-[90vh] px-32">
                    <div className="w-[60vw] -z-10 absolute -left-[25vw] h-[100vh] bg-blue-100 rounded-full"></div>
                    <div className="relative h-[90vh] flex flex-row items-center z-full top-0 ">
                        <section className="flex flex-col  items-center p-4 w-1/2">
                            <div className="flex flex-row w-fit bg-white drop-shadow-xl p-3 rounded-md">
                                <img className="object-contain" src={D1} alt="" />
                                <div className="ml-5">
                                    <header className="text-blue-900 text-xl font-black">Easy Online Resume Builder</header>
                                    <article>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.
                                    </article>
                                </div>
                            </div>
                            <div className="flex flex-row w-fit my-8 bg-white drop-shadow-xl p-3 rounded-md">
                                <img className="object-contain" src={D2} alt="" />
                                <div className="ml-5">
                                    <header className="text-blue-900 text-xl font-black">Step by Step Expert Tips</header>
                                    <article>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.
                                    </article>
                                </div>
                            </div>
                            <div className="flex flex-row w-fit bg-white drop-shadow-xl p-3 rounded-md">
                                <img className="object-contain" src={D3} alt="" />
                                <div className="ml-5">
                                    <header className="text-blue-900 text-xl font-black">Easy Online Resume Builder</header>
                                    <article>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section className="w-1/2 px-4">
                            <header className="text-4xl font-extrabold text-blue-900">
                                <ColorLine></ColorLine>
                                Why choose our platform?
                            </header>
                            <article className="my-4 text-lg text-gray-700 leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
                            </article>
                            <article className="my-4 text-lg text-gray-700 leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
                            </article>
                            <button className="bg-blue-400 px-4 stylus py-2 rounded-md text-white text-lg">Let's build your CV</button>
                        </section>
                    </div>
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