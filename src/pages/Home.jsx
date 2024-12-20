import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cat1 from '../assets/images/category.jpg';
import cat2 from '../assets/images/category2.jpg';
import Support from '../components/Support';
import Sale from '../components/Sale';
import BestSelling from '../components/BestSelling';
import ShowCards from '../components/ShowCards';

const Home = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div>
            <div>

                <section className="bg-[url(https://cdn.faire.com/fastly/1f86b5a4cf0440587fe48d7f9fb439d6ec65180efa7166d4596407c733578018.jpeg)] bg-cover  bg-center bg-no-repeat" >
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className="mx-auto max-w-xl text-center">
                            <h1 className="text-3xl text-black font-black sm:text-5xl">
                                BEYOND ELEGANCE
                                <strong className="font-extrabold text-red-700 sm:block"> THE VAULT </strong>
                            </h1>
                            <div className=' text-slate-900 font-extrabold '>UP TO 70% OFF</div>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link onClick={() => { setIsToggled(!isToggled) }} type="button" className="block w-full rounded-full bg-black px-12 py-3 text-sm font-medium text-white shadow sm:w-auto" to="/Shirts">Shop Now </Link>

                            </div>

                            {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link onClick={() => { setIsToggled(!isToggled) }} type="button" className="block w-full rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow sm:w-auto" to="/Shirts">Shop Now </Link>

                            </div> */}
                        </div>
                    </div>
                </section>
                <div className="mx-auto max-w-7xl px-4  pt-10 sm:px-6 lg:px-8 relative text-center">
                    <span className="relative flex justify-center">
                        <h1 className="relative z-10 bg-white text-3xl font-bold px-6 pb-3">Top Collections</h1>
                    </span>
                    <span className=' pt-3 text-gray-500 '>Express your style with our standout collection—fashion meets sophistication.</span><br /><br />

                    <div className='container flex justify-center pt-8 gap-20'>
                        <div><Link to="/Shirts"><img src={cat1} className="h-30 w-40 rounded-full cursor-pointer" alt="" /></Link>Shirts</div>
                        <div><Link to="/TShirts"><img src={cat2} className="h-30 w-40 rounded-full cursor-pointer" alt="" /></Link>T-Shirts</div>
                    </div>
                </div>
                <Sale />
                <BestSelling />
                <ShowCards />
                <Support />
            </div>
        </div>
    )
}

export default Home