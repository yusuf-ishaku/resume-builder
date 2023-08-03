import Heroimage from "../assets/banner2.png";
import Dollar from "../assets/img-dollar.svg";
import D1 from "../assets/d1.png";
import D2 from "../assets/d2.png";
import D3 from "../assets/d3.png";
import TCVS from "../assets/cv.png";
import CT from "../assets/custom.png";
import { Desc } from "../components/desc";
import F1 from "../assets/f1.png";
import F2 from "../assets/f2.png";
import F3 from "../assets/f3.png";
import F4 from "../assets/f4.png";
import F5 from "../assets/f5.png";
import F6 from "../assets/f6.png";
import T1 from "../assets/demo-1.png";
import { Link } from "react-router-dom";
import {Carousel} from "../components/carousel";
import Sunny from "../assets/sunny.jpg";
import Ajoy from "../assets/ajoy.jpg";
import Jebin from "../assets/jebin.jpg"
import { ColorLine } from "../components/color-line";
import { GrFacebookOption, GrGoogle, GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
import { GrLinkedinOption} from "react-icons/gr";
import { IconContext  } from "react-icons/lib";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
export const Home = () =>{
    const {fly, setFly} = useContext(AppContext)
    useEffect(() =>{
        setFly("w-full z-50 h-16 flex relative flex-row items-center px-4 md:px-10 lg:px-32 bg-blue-100")
        // console.log(fly)
    })
    return(
        <>
          
                <header className="h-fit flex flex-col md:flex-row mb-20 px-4 md:px-10 lg:px-32">
                    <section className="w-full md:w-1/2 px-4 flex flex-col  justify-center h-fit">
                        <div className="h-12 mt-10 w-full sm:w-fit flex flex-row items-center p-2 bg-blue-100 rounded-full">
                            <div className="rounded-full flex items-center justify-center w-8 h-8 my-2 ml-2 bg-slate-300">
                                <img src={Dollar} alt="" />
                            </div>
                            <span className="w-full font-semibold p-1 ml-4 mr-4 text-lg text-blue-600">
                                Discover the best ways to build your CV
                            </span>
                        </div>
                        <article>
                            <header className="text-blue-900 py-12 leading-8 lg:leading-16 text-3xl lg:text-5xl font-black">
                                Online CV Builder with Creative Templates
                            </header>
                            <p className="text-gray-500 leading-9 font-semibold text-base lg:text-xl">
                            Our Perfect resume builder takes the hassle out of resume writing. 
                            Choose from several templates and follow easy prompts 
                            to create the perfect job-ready resume.
                            </p>
                        </article>
                        <div className="flex md:flex-row flex-col my-5">
                            <Link to={"/templates"}><button className="bg-blue-500 text-white p-2 rounded-lg px-3 text-base mr-6">Choose Template</button></Link>
                                
                            <Link ><button className="bg-blue-500 text-white p-2 px-3 rounded-lg border-gray-200 border-2 text-base">Contact Us</button></Link>
                        </div>
                    </section>
                    <figure className="w-full hidden md:w-1/2 sm:flex items-center">
                        <img src={ Heroimage} alt="" />
                    </figure>
                </header>
                <section className="w-full h-fit px-4 md:px-10 lg:px-32">
                    <div className="w-[60vw] hidden -z-10 md:absolute md:-left-[25vw] h-[100vh] bg-blue-100 rounded-full"></div>
                    <div className="md:relative h-auto md:h-[90vh] flex flex-col md:flex-row items-center z-full">
                        <section className="flex flex-col  items-center p-4 w-full md:w-1/2">
                            <div className="flex flex-row w-fit bg-white drop-shadow-xl p-3 rounded-md">
                                <img className="object-contain" src={D1} alt="" />
                                <div className="ml-5">
                                    <header className="text-blue-900 text-lg lg:text-xl font-black">Easy Online Resume Builder</header>
                                    <article className="text-sm lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.
                                    </article>
                                </div>
                            </div>
                            <div className="flex flex-row w-fit my-8 text-lg lg:text-xl bg-white drop-shadow-xl p-3 rounded-md">
                                <img className="object-contain" src={D2} alt="" />
                                <div className="ml-5">
                                    <header className="text-blue-900 text-xl font-black">Step by Step Expert Tips</header>
                                    <article className="text-sm lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.
                                    </article>
                                </div>
                            </div>
                            <div className="flex flex-row w-fit text-lg lg:text-xl bg-white drop-shadow-xl p-3 rounded-md">
                                <img className="object-contain" src={D3} alt="" />
                                <div className="ml-5">
                                    <header className="text-blue-900 text-xl font-black">Easy Online Resume Builder</header>
                                    <article className="text-sm lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section className="w-full md:w-1/2 px-4">
                            <header className="text-4xl font-extrabold text-blue-900">
                                <ColorLine></ColorLine>
                                Why choose our platform?
                            </header>
                            <article className="my-4 text-base lg:text-lg text-gray-700 leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
                            </article>
                            <article className="my-4 text-base lg:text-lg text-gray-700 leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
                            </article>
                            <button className="bg-blue-400 px-4 stylus py-2 rounded-md text-white text-lg">Let's build your CV</button>
                        </section>
                    </div>
                </section>
                <section className="w-full flex md:flex-row flex-col-reverse justify-between items-center h-fit px-4 md:px-10 lg:px-32 py-10 md:py-28">
                    <article className="w-full md:w-1/2 flex flex-col justify-center">
                        <header className="text-blue-900 font-extrabold  text-4xl ">
                            <ColorLine></ColorLine>
                            We deliver the best
                        </header>
                        <section className="py-6">
                            <ul className="my-list text-base lg:text-xl font-bold">
                                <li className="list-inside my-1 h-16 leading-9 align-middle">Proven CV templates to increase hiring chance</li>
                                <li className="list-inside my-1 h-16 align-middle">Creative and clean design templates</li>
                                <li className="list-inside my-1 h-16 align-middle">Easy and intuitive online CV builder</li>
                                <li className="list-inside my-1 h-16 align-middle">Free to use. Designed by hiring professionals</li>
                                <li className="list-inside my-1 h-16 align-middle">Fast easy CV and resume formatting</li>
                                <li className="list-inside my-1 h-16 align-middle">Recruiter approved phrases</li>
                            </ul>
                        </section>
                    </article>
                    <figure className="w-full md:w-1/2">
                        <img src={TCVS} alt="" />
                    </figure>
                </section>
                <section className="mx-4 md:mx-32 flex pr-10 flex-row items-center justify-between rounded-xl overflow-hidden drop-shadow-2xl bg-white w-auto h-fit md:my-16">
                    <div className="">
                        <img src={CT} alt="" />
                    </div>
                    <article className="lg:text-4xl text-xl text-blue-900 font-bold">
                        Do you need a custom CV template?
                    </article>
                    <button className="ml-4 w-fit border-2 rounded-md p-2 font-semibold text-base lg:text-base border-blue-800 text-blue-800">
                        Send a request
                    </button>
                </section>
                <section className="md:mt-28 mt-12 md:mb-20 md:pt-28 md:pb-32 h-fit md:px-10 lg:px-32 px-4 bg-blue-100">
                    <header className="text-center flex flex-col items-center pt-10">
                        <ColorLine></ColorLine>
                        <h2 className="text-blue-900 font-bold text-4xl">Our Creative Templates</h2>
                        <p className="text-xl mx-4 lg:mx-48 my-8 lg:my-4 font-medium leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </header>
                    <section className="w-full flex flex-col py-3 md:flex-row items-center justify-between">
                        <div className="flex flex-col h-fit md:mb-0 mb-4 md:h-[500px] st  bg-white drop-shadow-xl border-white md:w-[30%] border-6">
                            <div className="bg-red-900  h-[82%]">
                                <img src={T1} alt="" />
                            </div>
                            <div className="h-[18%] w-full px-4 md:py-0 py-4 flex flex-row items-center justify-between">
                                <button className="stylin border-blue-600 p-2 w-auto px-2 text-white text-xs lg:text-lg rounded-3xl bg-blue-600">See template</button>
                                <Link to="/template/1"><button className="stylin w-auto border-blue-600 border-2 border-3 text-xs lg:text-lg p-2 px-2 rounded-3xl bg-white">Use Template</button></Link>
                            </div>
                        </div>
                        <div className="flex flex-col w-full st h-[500px] md:mb-0 mb-4 md:w-[30%] border-white drop-shadow-xl bg-white  border-6">
                            <div className="bg-red-900 cursor-pointer h-[82%]">
                               
                            </div>
                            <div className="h-[18%] w-full px-4 md:py-0 py-4 flex flex-row items-center justify-between">
                                <button className="stylin border-blue-600 w-auto p-2 px-2 text-white text-xs lg:text-lg rounded-3xl bg-blue-600">See template</button>
                                <button className="stylin border-blue-600 border-2 border-3 text-xs lg:text-lg p-2 px-2 rounded-3xl bg-white">Use Template</button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full st h-[500px] md:w-[30%] border-white drop-shadow-xl bg-white border-6">
                            <div className="bg-red-900 cursor-pointer h-[82%]">

                            </div>
                            <div className="h-[18%] px-4 flex flex-row items-center justify-between">
                                <button className="stylin border-blue-600 p-2 px-2 text-white text-xs lg:text-lg rounded-3xl bg-blue-600">See template</button>
                                <button className="stylin border-blue-600 border-2 border-3 text-xs lg:text-lg p-2 px-2 rounded-3xl bg-white">Use Template</button>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="w-full h-auto mt-24 mb-10 lg:mb-30">
                    <header className="text-center flex flex-col items-center">
                        <ColorLine></ColorLine>
                        <h2 className="text-blue-900 text-4xl font-extrabold">Our Main Features</h2>
                        <article className="lg:mx-56 px-4 mx-4 lg:px-16 w-auto">
                            <p className="text-xl text-slate-600  leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                            </p>
                        </article>
                    </header>
                    <section className="w-full h-fit flex flex-col  lg:grid lg:grid-cols-3 gap-8 md:px-10 lg:px-32 px-4 py-16">
                        <Desc img={F1} header="Proven Templates to increase hiring chance" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F2} header="Creative, Modern and Clean Templates Design" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F3} header="Easy and Intuitive Online CV and Resume Builder" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F4} header="Free to use. Developed by hiring professionals." text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F5} header="Recruiter Approved Phrases with Module Notification" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                        <Desc img={F6} header="Fast Easy CV and Resume Formatting" text="Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit."></Desc>
                    </section>
                </section>
                <section className="block md:px-10 lg:px-32 px-4 mb-10 lg:mb-40 py-10 lg:py-2 h-fit">
                    <header className="text-center flex flex-col items-center">
                        <ColorLine></ColorLine>
                        <h2 className="text-blue-900 text-4xl font-extrabold">Your Success, Our inspiration</h2>
                        <article className="mx-10 lg:mx-56 mt-6 px-4 lg:px-16 w-auto">
                            <p className="text-xl text-slate-600 font-medium  leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                            </p>
                        </article>
                    </header>
                    <article className="my-20 lg:mb-10 pb-10">
                        <Carousel image3 ={Jebin} testname3 ="Jebin Khan" image={Sunny} image2 = {Ajoy} testname2="Ajoy Das" testname = "Sunny Khan"></Carousel>
                    </article>
                </section>
                <footer className="w-full flex py-5 text-white justify-between px-4 lg:px-20 flex-col md:flex-row gap-8 h-fit md:h-fit bg-blue-900">
                    <section className="md:w-[25%] w-full">
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
        </>
    )
}