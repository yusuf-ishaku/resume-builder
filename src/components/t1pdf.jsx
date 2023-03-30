import Ajoy from "../assets/ajoy.jpg"; 
import {MdLocationOn } from "react-icons/md";
import { MdLocalPhone} from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RxGlobe } from "react-icons/rx"; 
import { MdFacebook} from "react-icons/md";
import { RiTwitterFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { useContext } from "react";
import { UserInputs } from "../App";
export const DocSide1 = () =>{
    const {skills, setSkills, experiences, uploadedImage, setExperiences, educations, setEducations,fName, title, address, email, weblink, phoneNumber, bio} = useContext(UserInputs);
    return (
        <section className="bg-white w-auto h-fit flex flex-row">
                        <section className="w-[45%] bg-blue-400 h-fit">
                            <img width={"300px"} height="300px" className="object-cover bg-white" src={uploadedImage} alt=""></img>
                            <span className="block pt-2 px-1 pl-2">
                                <h1 className="text-white font-semibold text-xl uppercase">{fName}</h1>
                            </span>
                            <span className="block pt-1 px-1 pl-2">
                                <h2 className="text-gray-700 font-semibold text-md uppercase">{title}</h2>
                            </span>
                            <div className="flex flex-col gap-4 p-2 pl-4">
                                {address === "" ? <></>: <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdLocationOn></MdLocationOn>
                                    </span>
                                    <h1 className="text-white">{address}</h1>
                                </div>}
                                {phoneNumber === ""? <></>: <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdLocalPhone></MdLocalPhone>
                                    </span>
                                    <h1 className="text-white text-sm">{phoneNumber}</h1>
                                </div>}
                                {email ===""? <></>: <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <MdEmail></MdEmail>
                                    </span>
                                    <h1 className="text-white text-sm">{email}</h1>
                                </div>}
                                {weblink === ""? <></>: <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 mr-3 h-9 rounded-full flex flex-row items-center justify-center bg-white">
                                        <RxGlobe></RxGlobe>
                                    </span>
                                    <h1 className="text-white text-sm">{weblink}</h1>
                                </div>}
                            </div>
                            <hr className="mx-2 my-2"></hr>
                            <span className="block pt-2 px-1 pl-4">
                                <h1 className="text-white font-semibold text-lg uppercase">{"Skills"}</h1>
                            </span>
                            <div className="flex flex-col gap-0 p-2 pl-4">
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                      {skills[0].skill}
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        {<span  className="bg-white h-[0.35rem] w-[80%]"></span>}
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        {skills[0].range}%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        {skills[1].skill}
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[50%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        {skills[1].range}%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        {skills[2].skill}
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[60%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        {skills[2].range}%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        {skills[3].skill}
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[90%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        {skills[3].range}%
                                    </span>
                                </div>
                                <div className="flex flex-row  items-center text-blue-400">
                                    <span className="w-9 text-xs mr-3 h-9 flex flex-row items-center justify-center text-white">
                                        {skills[4].skill}
                                    </span>
                                    <span className="flex flex-row items-center j bg-blue-500 h-[0.35rem] w-full">
                                        <span className="bg-white h-[0.35rem] w-[75%]"></span>
                                    </span>
                                    <span className="text-white text-xs ml-2">
                                        {skills[4].range}%
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
                            {bio ===""? <></>: <section>
                                <header className="text-md mb-2 text-blue-400 uppercase font-semibold">
                                    <h1>
                                    About
                                    </h1>
                                </header>
                                <article>
                                    <p className="text-sm">
                                    {bio}
                                    </p>
                                </article>
                            </section>}
                            <hr className="bg-blue-400 my-3 mx-1 h-[0.1rem]" />
                            <section>
                                <header className="text-md mb-2 text-blue-400 uppercase font-semibold">
                                    <h1>
                                    Work Experience
                                    </h1>
                                </header>
                                <section className="h-auto">
                                    <section className="flex flex-row">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[0.2rem] h-[10rem] bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>{experiences[0].startTime}-{experiences[0].endTime}</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">{experiences[0].company}</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                {experiences[0].title}
                                                </p>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="flex flex-row pt-2 relative -top-[4rem]">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            
                                            <div className="w-[0.2rem] h-[10rem] bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>{experiences[1].startTime}-{experiences[1].endTime}</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">{experiences[1].company}</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                {experiences[1].title}
                                                </p>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="flex flex-row pt-2 relative -top-[8rem]">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[0.2rem] h-[5.5rem] bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>{experiences[2].startTime}-{experiences[2].endTime}</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">{experiences[2].company}</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                {experiences[2].title}
                                                </p>
                                            </article>
                                        </div>
                                        
                                    </section>
                                    
                                </section>
                                <hr className="bg-blue-400 my-3 -mt-24 mx-1 h-[0.18rem]" />
                                
                            </section>
                            <section>
                                <header className="text-md mb-2 text-blue-400 uppercase font-semibold">
                                    <h1>
                                    Education
                                    </h1>
                                </header>
                                <section className="h-auto">
                                    <section className="flex flex-row">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[0.2rem] h-[10rem] bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>{educations[0].startTime}-{educations[0].endTime}</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">{educations[0].degree}</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                {educations[0].school}
                                                </p>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="flex flex-row pt-2 relative -top-[4rem]">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[0.2rem] h-[10rem] bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>{educations[1].startTime}-{educations[1].endTime}</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">{educations[1].degree}</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                {educations[1].school}
                                                </p>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="flex flex-row pt-2 relative -top-[8rem]">
                                        <div className="flex flex-col items-center justify-center mt-1 mr-2">
                                            <div className="w-3 h-3 flex flex-row items-center justify-center rounded-full bg-blue-400">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[0.2rem] h-[5.5rem] bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <header className="text-gray-800 text-sm font-semibold mb-3">
                                                <h1>{educations[2].startTime}-{educations[2].endTime}</h1>
                                            </header>
                                            <article>
                                                <header>
                                                    <h1 className="text-gray-800 text-sm font-semibold">{educations[2].degree}</h1>
                                                </header>
                                                <p className="text-gray-600 text-xs font-medium">
                                                {educations[2].school}
                                                </p>
                                            </article>
                                        </div>
                                        
                                    </section>
                                    
                                </section>
                                <hr className="bg-blue-400 my-3 -mt-24 mx-1 h-[0.18rem]" />
                                
                           
                            </section>
                            
                        </section>
                    </section>

    )
}