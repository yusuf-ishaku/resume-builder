import "../App.css";
import React from "react";
import { useContext, useEffect,  } from "react";
import { AppContext, UserInputs } from "../App";
import { useParams } from "react-router-dom";
import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Resume1 } from "../components/Resume1";
export const TemplatePage = () =>{
    const params = useParams();
    const {fly, setFly} = useContext(AppContext);
    const {firstName, setFirstName, role, setRole} = useContext(UserInputs);
    useEffect(()=>{
        setFly("hidden w-full z-50 h-16 flex flex-row items-center text-white px-32 absolute bg-transparent");
        console.log(params.templateId);
    });
    return(
        <>
            <section className="w-full flex flex-row fixed">
                <section className="w-[50vw] h-[100vh] bg-gray-900 flex flex-row items-center justify-center">
                    <PDFViewer width={'80%'} height={'90%'} showToolbar={false}>
                        <Resume1 firstName={firstName} role={role}></Resume1>
                   </PDFViewer>
                </section>
                <section className="w-[50vw] p-4 pb-5 bg-white drop-shadow-lg">
                    <header>
                        <h2 className="text-blue-600 font-medium text-2xl">Personal Information</h2>
                        <PDFDownloadLink document={<Resume1 firstName={firstName} role={role}></Resume1>} fileName={`${firstName}.pdf`}>
                        {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
                        </PDFDownloadLink>
                    </header>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Full Name:</label>
                            <input type="text"
                             placeholder="John Doe" 
                             className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                             onChange={(e) =>{setFirstName(e.target.value)}}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="job title">Job Title:</label>
                            <input 
                            type="text" 
                            placeholder="e.g. Software developer" 
                            className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"
                            onChange={(e) => {setRole(e.target.value)}}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Address:</label>
                            <input type="text" placeholder="96b California Street" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Your Email:</label>
                            <input type="text" placeholder="yourmail@gmail.com" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Website Link:</label>
                            <input type="text" placeholder="http://example.com" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fullname">Phone Number:</label>
                            <input type="text" placeholder="e.g. +234-816-173-6593" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="bio">Your bio:</label>
                        <textarea name="bio" placeholder="Bio" id="bio" cols="30" rows="10" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"></textarea>
                    </div>
                </section>
            </section>
        </>
    )
}