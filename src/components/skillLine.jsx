import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import {BsTelephone} from "react-icons/bs";


export const SkillLine = (props) =>{
    return (
        <>
        <div className="w-30 h-30 bg-white">
           
                {
                    props.address && <CiLocationOn color='white'></CiLocationOn>
                    ||
                    props.tel && <BsTelephone color='white'></BsTelephone>
                    || 
                    props.mail && <CiMail color='rgb(96 165 250)'></CiMail>
                    ||
                    props.web &&  <CiGlobe color='rgb(96 165 250)'></CiGlobe>
                }
          
        </div>
        </>
    )
};