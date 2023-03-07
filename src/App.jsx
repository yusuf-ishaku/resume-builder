import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const[fname, setFname] = useState("First Name");
  const [lname, setLname] = useState("Last Name");
  const[title, setTitle] = useState("Professional Title")




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
        </div>
        <div className="w-1/2 p-4 h-[100vh] flex flex-col items-center border-2">
          <div className="min-w-[50%] max-w-[90%] min-h-32 p-4 text-center border-gray-400 border-2 max-h-40">
            <span className="block h-8 my-1 text-3xl font-m text-gray-600 uppercase">{fname}</span> 
            <span className="block font-m text-6xl font-bold uppercase">{lname}</span>
            <span className="block mt-1 uppercase text-xs text-gray-700">{title}</span>
          </div>
          <div className="flex w-full flex-row justify-between gap-2">
            <div className="row1 w-1/2 p-2 mt-3">
              <span className="block text-xl h-fit text-semibold border-gray-900">
                EDUCATION
              </span>
            </div>
            <div className="row1 w-1/2 p-2 mt-3">
              <span className="block text-xl h-fit text-semibold border-gray-900">
                EDUCATION
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
