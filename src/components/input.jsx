
export const Inputs = (props) =>{
    return(
        <>

            <div className="flex flex-col">
                <label htmlFor="degree">Degree:</label>
                <input type="text" placeholder="E.g BSc., B.Eng." className="p-2 placeholder-gray-400 border-[1px] border-gray-400 rounded-md" />
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