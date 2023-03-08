import { TbEdit } from "react-icons/tb";

export const EducationBar = (props) =>{
    return(
        <>
        <div className="block w-full">
                <span className="block leading-none text-[0.9rem] font-bold mt-3 text-gray-900 font-m">
                    {props.degree}
                </span>
                <span className="block leading-none text-[0.6rem] font-medium text-gray-900 font-m">
                    {props.school}
                </span>
                <span className="block my-1 leading-none text-[0.4rem] font-medium">
                    <span className="inline leading-none">{props.startTime} - {props.endTime}</span>
                </span>
                <span className="flex justify-end w-full">
                    <TbEdit></TbEdit>
                </span>
        </div>
        </>
    )
}