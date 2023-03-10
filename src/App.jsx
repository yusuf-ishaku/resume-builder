import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import './App.css'
import { EducationBar } from './components/educationbar';
import {GrAddCircle} from "react-icons/gr"
import { IconContext } from 'react-icons';
import Pdf from "react-to-pdf";
function App() {
  const ref = React.createRef();
  const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [8.27,11.69]
};
  const [fname, setFname] = useState("First Name");
  const [lname, setLname] = useState("Last Name");
  const [title, setTitle] = useState("Professional Title");
  const [skillHidden, setSkillHidden] = useState(false);
  const [skillinputHide, setSkillInputHide] = useState(false)
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("")
  const[bio, setBio] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [eduinputHide, setEduInputHide] = useState(false);
  const [bioInputHide, setBioInputHide] = useState(false);
  const [bioHidden, setBioHidden] = useState(false)
  const [schoolCount, setSchoolCount] = useState([]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [we, setWe] = useState(false);
  const[company, setCompany] = useState("e.g. Microsoft");
  const [role, setRole] = useState("Product Manager");
  const[workE, setWorkE] = useState([]);
  const[startWTime, setStartWTime] = useState("");
  const[endWTime, setEndWTime] = useState("");
  const [ce, setCe] = useState(false);
  const [certs, setCerts] = useState([]);
  const[certif, setCertif] = useState("");
  const[cDate, setCDate] = useState("")
  
  let creatCe = ()=>{
    if(ce === true){
      setCe(false)
    }else{
      setCe(true)
    }
  }
  let creater = () => {
    if (eduinputHide === true) {
      setEduInputHide(false);
      setHidden(false);
    } else {
      setEduInputHide(true);
      setHidden(true);
    }
  }
  let createrSkill = () =>{
    if(skillinputHide === true){
      setSkillHidden(false);
      setSkillInputHide(false)
    }else{
      setSkillHidden(true);
      setSkillInputHide(true)
    }
  }
  let addCe = ()=>{
    if(certif === "" || cDate === ""){
      alert("missing input");
    }else{
      setCerts(certs.concat([{certif, cDate}]))
    }
  }
  let addSkill = () =>{
    
    setSkills(skills.concat(skill))
  }
  let createrBio = () =>{
    if(bioInputHide === true){
      setBioHidden(false);
      setBioInputHide(false);
    }else{
      setBioHidden(true);
      setBioInputHide(true)
    }
  }
  let creatWe = ()=>{
    if(we === true){
      setWe(false)
    }else{
      setWe(true)
    }
  }
  let addWe = () =>{
    if(role === "" || company === ""){
      alert("Missing inputs")
    }else{
      setWorkE(workE.concat([{ role, company, endWTime, startWTime }]));
    }
  }
  let addNew = () => {
    if (school === "" || degree === "" || endTime === "" || startTime === "") {
      alert('missing input');
    } else {

      setSchoolCount(schoolCount.concat([{ school, degree, endTime, startTime }]));
      document.querySelector(".school").value = "";
      document.querySelector(".std").value = "";
      document.querySelector(".degree").value = "";
      document.querySelector(".edt").value = "";
    }
  }


  return (
    <div className="App">
      <div className="w-full h-full  flex">
        <div className="w-1/2 h-fit p-6 flex flex-col">
          <input type="text" placeholder='First Name' className="grow h-10 my-5 placeholder-gray-600 w-80 p-3 focus:outline-none rounded-md border-2 border-gray-800" onChange={(e) => {
            setFname(e.target.value);
          }} required />
          <input type="text" placeholder="Last Name" className="grow my-5 placeholder-gray-600 w-80 p-3 focus:outline-none rounded-md border-2 border-gray-800" onChange={(e) => {
            setLname(e.target.value)
          }} required />
          <input type="email" onChange={(e) => {
            setTitle(e.target.value)

          }} placeholder='e.g. example@example.com' className="grow my-5 placeholder-gray-600 w-80 p-3 focus:outline-none rounded-md border-2 border-gray-800" required />
          <button className="w-fit flex items-center border-gray-800 hover:text-red-800 hover:bg-white rounded-md text-white border-2 px-2 p-1 bg-red-800" onClick={creater}>
            Add Education <span className={hidden ? "hidden" : "inline"}><RxCaretDown></RxCaretDown></span><span className={hidden ? "block" : "hidden"}><RxCaretUp></RxCaretUp></span>
          </button>
          <div className={eduinputHide ? 'eduinput  w-full p-3 h-fit border-red-800 border-2 rounded-md mt-1' : "hidden"}>
            <h3 className="text-md-text-gray-800">
              Add Education
            </h3>
            <input type="text" onChange={(e) => {
              setSchool(e.target.value);
              // setSchoolCount(...{school, degree, startTime, endTime} )
              // setSchoolCount([...[{school, degree, startTime, endTime}]] )
            }} placeholder='Name of School' className="school w-full p-2 my-4 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
            <input type="text" onChange={(e) => {
              setDegree(e.target.value);
              // setSchoolCount([...[{school, degree, startTime, endTime}]] )
              console.log(startTime)
            }} placeholder='Degree' className="degree w-full p-2 my-4 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
            <div className="flex w-full gap-8">
              <div className="">
                <label htmlFor="startdate">Start Date</label>
                <input type="date" onChange={(e) => {
                  setStartTime(e.target.value);
                  // setSchoolCount([...{school, degree, startTime, endTime}] );
                  // setSchoolCount([...[{school, degree, startTime, endTime}]] )
                  console.log(endTime)
                }} placeholder='Degree' className="w-full std p-2 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
              </div>
              <div className="">
                <label htmlFor="startdate">End Date</label>
                <input type="date" onChange={(e) => {
                  setEndTime(e.target.value);
                  console.log(degree);
                  // setSchoolCount([...[{school, degree, startTime, endTime}]] )
                }} placeholder='Degree' className="w-full edt p-2 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
              </div>

            </div>

            <div className="w-full flex justify-end">
              <button onClick={addNew} className="w-fit bg-red-800 p-2 px-5 rounded-md border-2 border-red-800 text-white hover:bg-white hover:text-red-800">
                Add
              </button>
            </div>
          </div>
          <button className="w-fit my-1 flex items-center border-gray-800 hover:text-red-800 hover:bg-white rounded-md text-white border-2 px-2 p-1 bg-red-800" onClick={createrBio}>
            Add Bio <span className={bioHidden ? "hidden" : "inline"}><RxCaretDown></RxCaretDown></span><span className={bioHidden ? "block" : "hidden"}><RxCaretUp></RxCaretUp></span>
          </button>
          <div className={bioInputHide ? "block": 'hidden'}>
            <textarea onChange={(e) =>{
              setBio(e.target.value)
            }} placeholder='I am Example...I am an exampler' className='text-gray-600 text-xl focus:outline-none rounded-md border-gray-600 border-2 my-2 p-3' name="bio" id="bio" cols="30" rows="10">

            </textarea>
          
          </div>
          <button className="w-fit my-1 flex items-center border-gray-800 hover:text-red-800 hover:bg-white rounded-md text-white border-2 px-2 p-1 bg-red-800" onClick={createrSkill}>
            Add Skills <span className={skillHidden ? "hidden" : "inline"}><RxCaretDown></RxCaretDown></span><span className={skillHidden ? "block" : "hidden"}><RxCaretUp></RxCaretUp></span>
          </button>
          <div className={skillinputHide ? 'eduinput  w-full p-3 h-fit border-red-800 border-2 rounded-md mt-1' : "hidden"}>
            <div className="w-full flex items-center">
              <input type="text" className='w-full border-red-800 border-2' onChange={(e) =>{
                setSkill(e.target.value)
              }} />

              <span className="block w-fit mx-2 hover:cursor-pointer" onClick={addSkill}>
                <IconContext.Provider value={{size:"24"}}>
                  <GrAddCircle></GrAddCircle>
                </IconContext.Provider>
              </span>
            </div>
          </div>
          <button className="w-fit my-1 flex items-center border-gray-800 hover:text-red-800 hover:bg-white rounded-md text-white border-2 px-2 p-1 bg-red-800" onClick={creatWe}>
            Add Work Experience <span className={we ? "hidden" : "inline"}><RxCaretDown></RxCaretDown></span><span className={we ? "block" : "hidden"}><RxCaretUp></RxCaretUp></span>
          </button>
          <div className={we ? "block border-red-800 border-1 rounded-md p-2": "hidden"}>
            <div className="flex flex-row w-auto items-center">
              <div className="w-full inputs flex flex-col">
                <input type="text" placeholder='Company/Organization' className="w-full border-red-800 border-1 p-1" onChange={(e)=>{
                  setCompany(e.target.value)
                }} />
                <input type="text" placeholder='Role' className="w-full my-2 border-red-800 border-1 p-1" onChange={(e) =>{
                  setRole(e.target.value)
                }} />
                <div className="w-full justify-between flex flex-row">
                  <div className="flex flex-col">
                    <label htmlFor="startWdate">Start Date</label>
                    <input onChange={(e) =>{
                      setStartWTime(e.target.value)
                    }} type="date" placeholder='Role' className="w-full my-2 border-red-800 border-1 p-1" />
                  </div>
                  <div className="flex flex-col">
                  <label htmlFor="endWdate">End Date</label>
                    <input onChange={(e) =>{
                      setEndWTime(e.target.value);
                    }} type="date" placeholder='Role' className="w-full my-2 border-red-800 border-1 p-1" />
                  </div>
                </div> 
              </div>
              <span className="block w-fit mx-2 hover:cursor-pointer" onClick={addWe}>
                  <IconContext.Provider value={{size:"24"}}>
                    <GrAddCircle></GrAddCircle>
                  </IconContext.Provider>
                </span>
            </div>
          </div>
          <button className="w-fit my-1 flex items-center border-gray-800 hover:text-red-800 hover:bg-white rounded-md text-white border-2 px-2 p-1 bg-red-800" onClick={creatCe}>
            Add Certifications <span className={ce ? "hidden" : "inline"}><RxCaretDown></RxCaretDown></span><span className={ce ? "block" : "hidden"}><RxCaretUp></RxCaretUp></span>
          </button>
          <div className={ce? "w-full flex flex-col my-1 rounded-sm p-2 border-1 border-red-800 hover:text-red-800 hover:bg-white":"hidden" }>
            <label htmlFor="" className='mx-2'>Certificate</label>
            <input type="text" placeholder='Certificate' className='w-auto mx-2 rounded-md border-red-800 border-1' onChange={(e) =>{
              setCertif(e.target.value);
            }} />
            <label htmlFor="dateofcollection" className='mx-2'>
              Date of Reciept
            </label>
            <input type="date" className='border-red-800 border-1 mx-2 my-1 rounded-md' onChange={(e) =>{
              setCDate(e.target.value)
            }} />
            <span className="block w-fit mx-2 hover:cursor-pointer" onClick={addCe}>
                  <IconContext.Provider value={{size:"24"}}>
                    <GrAddCircle></GrAddCircle>
                  </IconContext.Provider>
            </span>
          </div>
          <Pdf targetRef={ref} filename={fname} options={options} x={.14} y={.08} scale={1}>
            {({ toPdf }) => (
              <button className='bg-red-800 p-2 border-1 rounded-md text-white' onClick={toPdf}>Generate pdf</button>
            )}
          </Pdf>
        </div>

        
        <div ref={ref} className="w-1/2 top-0 left-[50%] right-0 p-4 h-[1121px] flex flex-col items-center border-2 border-gray-900">
          <div className="min-w-[20%] max-w-[90%] h-fit p-2 text-center border-gray-900 border-1 max-h-40">
            <span className="block text-md font-m py-1 leading-none text-gray-900 uppercase">{fname}</span>
            <span className="block font-m text-lg py-1 pt-0 leading-none font-bold uppercase">{lname}</span>
            <span className="block uppercase font-semibold text-[0.5rem] text-gray-900">{title}</span>
          </div>
          <div className="flex  h-[1122.24px] w-full mt-2 flex-col flex-wrap justify-between gap-2 font-m">
            <div className="h-[1122.24px] grid grid-cols-1 row1 w-full p-2">
              <div className="h-[1122.24px] w-1/2  border-r-2 border-gray-900">
                <span className="block uppercase py-1 w-fit px-3 text-[0.9rem] h-fit text-gray-900 font-bold border-1 border-gray-900">
                  EDUCATION
                </span>
                <div className="h-[100%] flex flex-col flex-wrap w-full">
                  
                  {schoolCount.length ?
                    schoolCount.map((x) => {
                    return (
                      <EducationBar degree={x.degree} school={x.school} endTime={x.endTime} startTime={x.startTime}></EducationBar>
                    );
                  }): <EducationBar degree="MSc." school="Resume builder university" endTime="02-06-90" startTime="02-06-94"></EducationBar>}
                  <span className="block my-1 mt-4 uppercase py-1 w-fit px-3 text-md h-fit text-gray-900 border-2 font-bold border-gray-900">
                    Profile
                  </span>
                  <span className="block w-1/2 profile py-1 font-semibold text-md leading-5">
                    {bio? bio : "I am a creative designer, I love this, I am..."}
                  </span>
                  <span className="block my-1 mt-4 py-1 uppercase w-fit px-3 text-[0.9rem] h-fit text-gray-900 border-2 font-bold border-gray-900">
                    Skills
                  </span>
                  <span className="w-1/2 flex flex-col h-auto py-1 font-semibold skills text-md leading-5">
                    {skills.length ? skills.map((x,y)=>{
                        return(
                          <ul className="list-disc">
                            <li>
                            <input rows={2} type="text" onBlur={(e) =>{
                            skills[y] = e.target.value;
                            
                            setSkills(skills);
                          }} defaultValue={x} className='w-[300px] px-1 focus:outline-none' readOnly={false} contentEditable={true}></input>
                            </li>
                          </ul>
                        )
                      }): "Interpersonal Communication etc."
                    }
                  </span>
                  <span className="block uppercase mt-2 py-1 w-fit px-3 text-[0.9rem] h-fit text-gray-900 font-bold border-1 border-gray-900">
                    work Experience
                  </span>
                    { workE.length ? workE.map((x) =>{
                      return(
                        <EducationBar degree = {x.company} school = {x.role} startTime = {x.startWTime} endTime = {x.endWTime}></EducationBar>
                      )
                    }): <EducationBar degree = "The Roothub" school = "Intern" startTime = "02-09-2022" endTime = "02-09-2023"></EducationBar>
                    }
                </div>
              </div>
              <div className='w-1/2'>
              <span className="block uppercase mt-2 py-1 w-fit px-3 text-[0.9rem] h-fit text-gray-900 font-bold border-1 border-gray-900">
                    work Experience
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
