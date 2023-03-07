import { TbEdit } from "react-icons/tb";

export const EducationBar = (props) =>{
    return(
        <>
            <span className="block text-xl font-semibold mt-3 text-gray-900 font-m">
                {props.degree}
            </span>
            <span className="block text-xl text-medium text-gray-900 font-m">
                {props.school}
            </span>
            <span className="block my-1 text-sm text-medium">
                <span className="inline">{props.startTime} - {props.endTime}</span>
            </span>
            <span className="flex justify-end w-full">
                <TbEdit></TbEdit>
            </span>
        </>
    )
}