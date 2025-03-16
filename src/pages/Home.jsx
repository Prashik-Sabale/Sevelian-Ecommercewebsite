import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cat1 from '../assets/images/category.jpg';
import cat2 from '../assets/images/category2.jpg';
import Support from '../components/Support';
import Sale from '../components/Sale';
import BestSelling from '../components/BestSelling';
import ShowCards from '../components/ShowCards';
import LinenInfo from '../components/LinenInfo';
import bgvideo from '../assets/videos/inshot.mp4'

const Home = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div>
            <div>
                <section className="relative w-full h-screen overflow-hidden">
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-10"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={bgvideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay for text and buttons */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-20">
                        <div className="text-center text-white px-4">
                            <h1 className="text-3xl font-black sm:text-5xl">
                                BEYOND ELEGANCE
                                <strong className="font-extrabold text-red-700 sm:block"> THE VAULT </strong>
                            </h1>
                            {/* <div className="text-slate-200 font-extrabold mt-2">UP TO 70% OFF</div> */}
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    onClick={() => {
                                        setIsToggled(!isToggled);
                                    }}
                                    type="button"
                                    className="block w-full sm:w-auto max-w-[200px] rounded-full bg-transparent border-2 border-white px-6 py-2 text-sm font-medium text-white shadow transition duration-300 hover:bg-white hover:text-black"
                                    to="/Shirts"
                                >
                                    Shop Now
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-7xl px-4  pt-10 sm:px-6 lg:px-8 relative text-center">
                    <span className="relative flex justify-center">
                        <h1 className="relative bg-white text-3xl font-bold px-6 pb-3">Top Collections</h1>
                    </span>
                    <span className=' pt-3 text-gray-500 '>Express your style with our standout collection—fashion meets sophistication.</span><br /><br />

                    <div className='container flex justify-center z-0 pt-8 gap-20'>
                        <div><Link to="/Shirts"><img src={cat1} className="h-30 z-0 w-40 rounded-full cursor-pointer" alt="" /></Link>Shirts</div>
                        <div><Link to="/TShirts"><img src={cat2} className="h-30 w-40 z-0 rounded-full cursor-pointer" alt="" /></Link>T-Shirts</div>
                    </div>
                </div>

                <ShowCards />
                <Sale />
                <BestSelling />
                <LinenInfo />
                <Support />
            </div>
        </div>
    )
}

export default Home

// <section section className = "bg-[url(https://cdn.faire.com/fastly/1f86b5a4cf0440587fe48d7f9fb439d6ec65180efa7166d4596407c733578018.jpeg)] bg-cover  bg-center bg-no-repeat" >
//     <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
//         <div className="mx-auto max-w-xl text-center">
//             <h1 className="text-3xl text-black font-black sm:text-5xl">
//                 BEYOND ELEGANCE
//                 <strong className="font-extrabold text-red-700 sm:block"> THE VAULT </strong>
//             </h1>
//             <div className=' text-slate-900 font-extrabold '>UP TO 70% OFF</div>

//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//                 <Link onClick={() => { setIsToggled(!isToggled) }} type="button" className="block w-full rounded-full bg-black px-12 py-3 text-sm font-medium text-white shadow sm:w-auto" to="/Shirts">Shop Now </Link>

//             </div>

//             {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
//                             <Link onClick={() => { setIsToggled(!isToggled) }} type="button" className="block w-full rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow sm:w-auto" to="/Shirts">Shop Now </Link>

//                         </div> */}
//         </div>
//     </div>
//             </section >