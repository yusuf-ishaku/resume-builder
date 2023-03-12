import Heroimage from "../assets/banner2.png";
import Dollar from "../assets/img-dollar.svg"
export const Home = () =>{
    return(
        <>
            <div className="w-full ">
                <header className="flex flex-row px-32">
                    <section className="w-1/2 px-4 flex flex-col  justify-center h-[90vh]">
                        <div className="h-12 w-fit flex flex-row items-center p-2 bg-blue-100 rounded-full">
                            <div className="rounded-full flex items-center justify-center w-8 h-8 my-2 ml-2 bg-slate-300">
                                <img src={Dollar} alt="" />
                            </div>
                            <span className="font-semibold ml-4 mr-4 text-lg text-blue-600">
                                Discover the best ways to build your CV
                            </span>
                        </div>
                        <article>
                            <header className="text-blue-900 py-12 leading-16 text-5xl font-black">
                                Online CV Builder with Creative Templates
                            </header>
                            <p className="text-gray-500 leading-9 font-semibold text-xl">
                            Our Perfect resume builder takes the hassle out of resume writing. 
                            Choose from several templates and follow easy prompts 
                            to create the perfect job-ready resume.
                            </p>
                        </article>
                        <div className="flex my-5">
                            <button className="bg-blue-500 text-white p-2 rounded-lg px-6 text-lg mr-6">Choose Template</button>
                                
                            <button className="bg-blue-500 text-white p-2 px-6 rounded-lg border-gray-200 border-2 text-lg">Contact Us</button>
                        </div>
                    </section>
                    <figure className="w-1/2 flex items-center">
                        <img src={ Heroimage} alt="" />
                    </figure>
                </header>
            </div>
        </>
    )
}