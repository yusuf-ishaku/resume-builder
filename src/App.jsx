import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import './App.css'


function App() {
  const[fname, setFname] = useState("First Name");
  const [lname, setLname] = useState("Last Name");
  const[title, setTitle] = useState("Professional Title");
  const [hidden, setHidden] = useState(false);
  const [eduinputHide, setEduInputHide] = useState(false);
  const [schoolCount, setSchoolCount] = useState([]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  let creater = () =>{
    if(eduinputHide === true){
      setEduInputHide(false);
      setHidden(false);
    }else{
      setEduInputHide(true);
      setHidden(true);
    }
  }


  return (
    <div className="App">
      <div className="w-full h-full  flex">
        <div className="w-1/2 h-fit p-6 flex flex-col">
          <input type="text" placeholder='First Name' className="grow h-10 my-5 placeholder-gray-600 w-80 p-3 focus:outline-none rounded-md border-2 border-gray-800" onChange={(e)=>{
            setFname(e.target.value)
          }} required/>
          <input type="text" placeholder="Last Name" className="grow my-5 placeholder-gray-600 w-80 p-3 focus:outline-none rounded-md border-2 border-gray-800" onChange={(e) =>{
            setLname(e.target.value)
          }} required/>
          <input type="email" onChange={(e) =>{
            setTitle(e.target.value)

          }} placeholder='e.g. example@example.com' className="grow my-5 placeholder-gray-600 w-80 p-3 focus:outline-none rounded-md border-2 border-gray-800" required/>
          <button className="w-fit flex items-center border-gray-800 hover:text-red-800 hover:bg-white rounded-md text-white border-2 px-2 p-1 bg-red-800" onClick={creater}>
            Add Education <span className={hidden ? "hidden" : "inline"}><RxCaretDown></RxCaretDown></span><span className={hidden ? "block": "hidden"}><RxCaretUp></RxCaretUp></span>
          </button>
          <div className= {eduinputHide? 'eduinput  w-full p-3 h-fit border-red-800 border-2 rounded-md mt-1': "hidden"}>
            <h3 className="text-md-text-gray-800">
              Add Education
            </h3>
            <input type="text" onChange={(e) =>{
              setSchool(e.target.value)
            }} placeholder='Name of School' className="w-full p-2 my-4 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
            <input type="text" onChange={(e) =>{
              setDegree(e.target.value)
            }} placeholder='Degree' className="w-full p-2 my-4 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
            <div className="flex w-full gap-8">
              <div className="">
                <label htmlFor="startdate">Start Date</label>
                <input type="date" onChange={(e) =>{
                  setDegree(e.target.value)
                }} placeholder='Degree' className="w-full p-2 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
              </div>
              
             
                <input type="date" onChange={(e) =>{
                setDegree(e.target.value)
              }} placeholder='Degree' className="w-full p-2 my-4 placeholder-gray-600 focus:outline-none rounded-md border-2 border-gray-900" />
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4 h-[100vh] flex flex-col items-center border-2">
          <div className="min-w-[50%] max-w-[90%] min-h-32 p-4 text-center border-gray-400 border-2 max-h-40">
            <span className="block h-8 my-1 text-3xl font-m text-gray-600 uppercase">{fname}</span> 
            <span className="block font-m text-6xl font-bold uppercase">{lname}</span>
            <span className="block mt-1 uppercase text-xs text-gray-700">{title}</span>
          </div>
          <div className="flex w-full mt-6 flex-row justify-between gap-2 font-m">
            <div className="row1 w-1/2 p-2">
              <span className="block uppercase w-fit p-1 px-3 text-lg h-fit text-gray-900 font-bold border-2 border-gray-300">
                EDUCATION
              </span>
              <span className="text-md text-gray-900 font-m">
                {school}
              </span>
            </div>
            <div className="row1 w-1/2 p-2">
              <span className="block uppercase w-fit p-1 px-3 text-lg h-fit text-gray-900 border-2 font-bold border-gray-300">
                Profile
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
