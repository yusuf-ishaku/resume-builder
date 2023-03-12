import { Link } from "react-router-dom"


export const Navbar = () =>{
    return(
        <>
            <nav className="w-full h-16 flex flex-row items-center px-32 bg-slate-100">
                <header className="uppercase font-semibold text-xl mr-auto">
                    <Link to="/">Resume builder</Link>
                </header>
                <Link to="/" className="uppercase mx-4 font-bold hover:text-blue-600">HOME</Link>
                <Link className="uppercase mx-4 font-bold hover:text-blue-600">about us</Link>
                <Link className="uppercase mx-4 font-bold hover:text-blue-600">pricing</Link>
                <Link className="uppercase mx-4 font-bold hover:text-blue-600">templates</Link>
                <Link className="uppercase mx-4 font-bold hover:text-blue-600">contact</Link>
                <Link className="uppercase mx-4 font-light ">
                    <button className="bg-blue-600 text-sm p-2 px-4 uppercase rounded-lg text-white">login</button>
                </Link>
                <Link className="uppercase mx-4 font-light">
                    <button className="bg-blue-600 text-sm p-2 px-4 uppercase rounded-lg text-white">Sign Up</button>
                </Link>
            </nav>
        </>
    )
}