import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import './App.css'
import { EducationBar } from './components/educationbar';


function App() {
  const [fname, setFname] = useState("First Name");
  const [lname, setLname] = useState("Last Name");
  const [title, setTitle] = useState("Professional Title");
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

  let creater = () => {
    if (eduinputHide === true) {
      setEduInputHide(false);
      setHidden(false);
    } else {
      setEduInputHide(true);
      setHidden(true);
    }
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
        </div>


        <div className="w-1/2 fixed top-0 left-[50%] right-0 p-4 h-[100vh] flex flex-col items-center border-2">
          <div className="min-w-[20%] max-w-[90%] h-fit p-2 text-center border-gray-400 border-2 max-h-40">
            <span className="block text-md font-m py-1 leading-none text-gray-600 uppercase">{fname}</span>
            <span className="block font-m text-lg py-1 pt-0 leading-none font-bold uppercase">{lname}</span>
            <span className="block uppercase font-semibold text-[0.5rem] text-gray-700">{title}</span>
          </div>
          <div className="flex  h-[100px] w-full mt-2 flex-col flex-wrap justify-between gap-2 font-m">
            <div className="h-[100vh] grid grid-cols-1 row1 w-full p-2">
              <div className="h-[100vh] w-1/2  border-r-2 border-gray-300">
                <span className="block uppercase w-fit px-3 text-[0.7rem] h-fit text-gray-900 font-bold border-2 border-gray-300">
                  EDUCATION
                </span>
                <div className="h-[100vh] flex flex-col flex-wrap w-full">
                  
                  {schoolCount.length ?
                    schoolCount.map((x) => {
                    return (
                      <EducationBar degree={x.degree} school={x.school} endTime={x.endTime} startTime={x.startTime}></EducationBar>
                    );
                  }): <EducationBar degree="MSc." school="Resume builder university" endTime="02-06-90" startTime="02-06-94"></EducationBar>}
                  <span className="block my-1 uppercase w-fit px-3 text-[0.7rem] h-fit text-gray-900 border-2 font-bold border-gray-300">
                    Profile
                  </span>
                  <p className="profile text-[0.9rem] leading-none">
                    {bio? bio : "I am a creative designer, I love this, I am..."}
                  </p>
                  <span className="block my-1 uppercase w-fit px-3 text-[0.7rem] h-fit text-gray-900 border-2 font-bold border-gray-300">
                    Skills
                  </span>
                  <p className="skills text-[0.9rem] leading-none">

                  </p>
                </div>
              </div>
              <div className='w-1/2'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
