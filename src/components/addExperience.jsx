import { useContext } from "react"
import { UserInputs } from "../App"

export const AddExperience = ( props ) =>{
    const {experiences, setExperiences} = useContext(UserInputs);
    return(
        <>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                placeholder="E.g. Web Developer" 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                onChange={(e)=>{if(props.no === 0){setExperiences([...experiences, experiences[0].title = e.target.value])}else if(props.no ===1){setExperiences([...experiences, experiences[1].title = e.target.value])}else if(props.no ===2 ){setExperiences([...experiences, experiences[2].title = e.target.value])}}}/></div>
            <div className="flex flex-col">
                <label htmlFor="company">Company:</label>
                <input 
                type="text" 
                placeholder="Enter job" 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                onChange={(e)=>{if(props.no === 0){setExperiences([...experiences, experiences[0].company = e.target.value])}else if(props.no ===1){setExperiences([...experiences, experiences[1].company = e.target.value])}else if(props.no ===2 ){setExperiences([...experiences, experiences[2].company = e.target.value])}}}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="start">Start:</label>
                <input 
                type="date" 
                placeholder="Enter" 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                onChange={(e)=>{if(props.no === 0){setExperiences([...experiences, experiences[0].startTime = e.target.value])}else if(props.no ===1){setExperiences([...experiences, experiences[1].startTime = e.target.value])}else if(props.no ===2 ){setExperiences([...experiences, experiences[2].startTime = e.target.value])}}}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="finish">Finish:</label>
                <input 
                type="date" 
                placeholder="Enter your email" 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                onChange={(e)=>{if(props.no === 0){setExperiences([...experiences, experiences[0].endTime = e.target.value])}else if(props.no ===1){setExperiences([...experiences, experiences[1].endTime = e.target.value])}else if(props.no ===2 ){setExperiences([...experiences, experiences[2].endTime = e.target.value])}}}/>
            </div>
        </>
    )
}