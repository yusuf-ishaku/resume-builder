import "../App.css";
import React from "react"
import { useContext, useEffect, useState,} from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import { AddEducation } from "../components/AddEducation";
import { UserInputs } from "../App";
import { AddExperience } from "../components/addExperience";
import { SkillRange } from "../components/skillRange";

export const TemplatePage = () =>{
    const params = useParams();
   const {fly, setFly} = useContext(AppContext);
   useEffect(()=>{
    setFly("hidden w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent");
    console.log(params.templateId);
   })
   const [fName, setFname] = useState("Stephen Col");
   const [title, setTitle ] = useState("Web Developer");
   const [address, setAddress] = useState("21, Texas Street, USA");
   const [email, setEmail] = useState("example@example.com");
   const [weblink, setWeblink] = useState("yourname.com");
   const [phoneNumber, setPhoneNumber] = useState("+234-816-173-6593");
   const[bio, setBio] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")
   const[count, setCount] = useState(1);
   const [imValue, setImValue] = useState("")
   const [count2, setCount2] = useState(1);
   const [range, setRange] = useState(50);
   const [count3, setCount3] = useState(1);
   const [image, setImage] = useState("");
   const [uploadedImage, setUploadedImage] = useState("");
   const ref = React.createRef();
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [15.6, 8.3]
    };
   const[educations, setEducations] = useState([
    {degree: "Lorem ipsum", startTime: 2019, endTime: 2021, school: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}, 
    { degree: "Lorem ipsum", startTime: 2019, endTime: 2021, school: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}, 
    { degree: "Lorem Ipsum", startTime: 2019, endTime: 2021, school: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
    ]);
    const [experiences, setExperiences] = useState([{
        company: "Lorem Ipsum", startTime: 2019, endTime: 2021, title: "Web Developer: worked to convert great designs into resuable, scalable code"
    }, {
        company: "Lorem Ipsum", startTime: 2019, endTime: 2021, title: "Web Developer: worked to convert great designs into resuable, scalable code"
    }, {
        company: "Lorem Ipsum", startTime: 2019, endTime: 2021, title: "Web Developer: worked to convert great designs into resuable, scalable code"
    }]);
    const [skills, setSkills] = useState([
        {skill: "HTML", range: 70},
        { skill: "CSS", range: 50},
        { skill: "JS", range: 60},
        { skill: "JQuery", range: 43},
        { skill: "SASS", range: 75}
    ]);

    return(
        <>
            <section className="w-full flex flex-row relative">
                <section className="w-[55%] p-4 pb-5 h-auto bg-white drop-shadow-lg">
                    <header>
                        <h2 className="text-blue-600 font-medium text-2xl">Personal Information</h2>
                    </header>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Full Name:</label>
                            <input type="text" placeholder="Enter full name" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e)=>{
                                setFname(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Job Title:</label>
                            <input type="text" placeholder="Enter job" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setTitle(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Address:</label>
                            <input type="text" placeholder="Enter your address" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setAddress(e.target.value)
                            }}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Email:</label>
                            <input type="text" placeholder="Enter your email" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Website Link:</label>
                            <input type="text" placeholder="Enter your website link" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setWeblink(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Phone Number:</label>
                            <input type="text" placeholder="Enter your phone number" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e) =>{
                                setPhoneNumber(e.target.value)
                            }} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="bio">Your bio:</label>
                        <textarea name="bio" placeholder="Bio" id="bio" cols="30" rows="10" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" onChange={(e)=>{setBio(e.target.value)}}></textarea>
                    </div>
                </section>
            </section>
        </>
    )
}