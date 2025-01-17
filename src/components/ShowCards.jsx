import React from 'react';
import mainimg from '../assets/images/Shirts/mainimg.jpg'
import mainimg2 from '../assets/images/Shirts/mainimg2.jfif'
import mainimg3 from '../assets/images/Shirts/mainimg3.jpg'


const ShowCards = () => {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                        <p class="mb-2 text-center font-semibold text-slate-900 md:mb-3 lg:text-lg">Sevelian </p>

                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Shop by Taste
                        </h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Inspire and let yourself be inspired, from one unique fashion to another. </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-10 p-10'>
                <img src={mainimg} className=' rounded-xl h-1/4  w-1/4 cursor-pointer' alt="" srcset="" />
                <img src={mainimg2} className=' rounded-xl h-1/4  w-1/4 cursor-pointer' alt="" srcset="" />
                <img src={mainimg3} className=' rounded-xl h-1/4  w-1/4 cursor-pointer' alt="" srcset="" />
            </div>
        </div>
    )
}

export default ShowCards;


