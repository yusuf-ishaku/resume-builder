import { useContext } from "react"
import { UserInputs } from "../App"

export const AddEducation = (props) =>{
    const {educations, setEducations} = useContext(UserInputs);
    return(
        <>

            <div className="flex flex-col">
                <label htmlFor="degree">Degree:</label>
                <input 
                onChange={(e) =>{setEducations([...educations, educations[props.no].degree = e.target.value])}} type="text" 
                placeholder="E.g BSc., B.Eng." className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="school">School:</label>
                <input  
                type="text" 
                placeholder="Enter School Attended" 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"
                onChange={(e) =>{setEducations([...educations, educations[props.no].school = e.target.value])}} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="start">Start:</label>
                <input type="date" 
                placeholder="Start Time" 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                onChange={(e) =>{setEducations([...educations, educations[props.no].startTime = e.target.value])}}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="finish">Finish:</label>
                <input 
                type="date" 
                placeholder="Enter your email" 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                onChange={(e) =>{setEducations([...educations, educations[props.no].endTime = e.target.value])}}/>
            </div>
        </>
    )
}