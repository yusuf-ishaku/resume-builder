import { useContext } from "react";
import { UserInputs } from "../App";

export const SkillRange = (props) =>{
    const {range, setRange, skills, setSkills} = useContext(UserInputs);
    return(
        <>
            <div className="flex flex-col">
                <label htmlFor="skill">Skill:</label>
                <input 
                type="text" 
                placeholder="E.g BSc., B.Eng." 
                className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" 
                onChange={(e) =>setSkills([...skills, skills[props.no].skill = e.target.value])}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="school">Proficiency:</label>
                <input
                    type="range"
                    placeholder="Enter job"
                    className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md"
                    onChange={(e) => setSkills([...skills, skills[props.no].range = e.target.value])} />
                {range}
            </div>
        </>
    )
}