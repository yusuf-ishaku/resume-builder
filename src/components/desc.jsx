export const Desc = (props)=>{
    return(
        <>
            <div className="w-full p-6 flex flex-col items-center h-[350px] rounded-2xl drop-shadow-2xl bg-white">
                <figure>
                    <img src={props.img} alt="" />
                </figure>
                <header className="mx-5 my-2 text-blue-900 font-extrabold text-center text-xl">
                    {props.header}
                </header>
                <article>
                    <p className="leading-8 text-center text-lg text-slate-700">
                    {props.text}
                    </p>
                </article>
            </div>
        </>
    )
}