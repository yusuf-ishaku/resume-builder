import { useContext } from "react"
import { UserInputs } from "../App"

export const AddEducation = (props) =>{
    const {educations, setEducations} = useContext(UserInputs);
    return(
        <>

            <div className="flex flex-col">
                <label htmlFor="degree">Degree:</label>
                <input onChange={(e) =>{if(props.no === 0){setEducations([...educations, educations[0].degree = e.target.value])}else if(props.no === 1){setEducations([...educations, educations[1].degree = e.target.value])}else if(props.no === 2){setEducations([...educations, educations[2].degree = e.target.value])}}} type="text" placeholder="E.g BSc., B.Eng." className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="school">School:</label>
                <input type="text" placeholder="Enter job" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="start">Start:</label>
                <input type="text" placeholder="Enter your address" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="finish">Finish:</label>
                <input type="text" placeholder="Enter your email" className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
            </div>
        </>
    )
}