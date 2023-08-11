import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import {BsTelephone} from "react-icons/bs";


export const SkillLine = (props) =>{
    return (
        <>
        <div className="w-full">
            <span>
                {
                    props.prop.type === "address" && <CiLocationOn></CiLocationOn>
                    ||
                    props.prop.tel && <BsTelephone></BsTelephone>
                    || 
                    props.prop.mail && <CiMail></CiMail>
                    ||
                    props.prop.web &&  <CiGlobe></CiGlobe>
                }
            </span>
        </div>
        </>
    )
};