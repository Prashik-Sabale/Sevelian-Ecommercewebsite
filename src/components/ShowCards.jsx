import React from 'react';
// import mainimg from '../assets/images/Shirts/mainimg.jpg'
// import mainimg2 from '../assets/images/Shirts/mainimg2.jfif'
// import mainimg3 from '../assets/images/Shirts/mainimg3.jpg'
import sampleVideo1 from "../assets/videos/video1.mp4";
import sampleVideo2 from "../assets/videos/video2.mp4";
import sampleVideo3 from "../assets/videos/video3.mp4";


const ShowCards = () => {
    return (
        <>
            <div>
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                            <p class="mb-2 text-center font-semibold text-slate-900 md:mb-3 lg:text-lg">Sevelian </p>

                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Be With Elegance
                            </h2>

                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Discover a collection of timeless wardrobe essentials, seamlessly transitioning from work to weekend. Inspired by travel, our America-designed pieces prioritize sustainability with natural fibers and mindful practices. Explore a range of Linen & Cotton </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-nowrap justify-center items-center gap-4 sm:gap-10 lg:gap-20 p-4 sm:p-6 lg:p-10 overflow-x-auto">
                    {[sampleVideo1, sampleVideo2, sampleVideo3].map((videoSrc, index) => (
                        <video
                            key={index}
                            className="rounded-2xl w-full max-w-[120px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShowCards;


