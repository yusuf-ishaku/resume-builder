import { TbEdit } from "react-icons/tb";

export const EducationBar = (props) =>{
    return(
        <>
        <div className="block w-full">
                <span className="block leading-none py-1 text-lg font-bold mt-3 text-gray-900 font-m">
                    {props.degree}
                </span>
                <span className="block leading-6 py-1 pt-0 text-md font-semibold text-gray-900 font-m">
                    {props.school}
                </span>
                <span className="block my-1 leading-none text-[0.7rem] font-semibold">
                    <span className="inline leading-none">{props.startTime} - {props.endTime}</span>
                </span>
                {/* <span className="flex justify-end w-full">
                    <TbEdit></TbEdit>
                </span> */}
        </div>
        </>
    )
}