import React from 'react';
import bgimage from '../assets/images/outfitmen.jpg';

const LinenInfo = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8  ">
                    <div className="space-y-4 md:space-y-8 ">
                        <section className='overflow-hidden '>
                            <img
                                src={bgimage}
                                className=" h-32 w-full object-cover md:h-full"
                                alt=""
                            />
                        </section>
                        <span className="relative flex justify-center">
                            <div
                                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                            ></div>

                            <span className="relative z-10 bg-white text-xl font-serif px-6">SEVELIAN</span>
                        </span>
                        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div class="rounded-lg px-4 py-6 md:py-8 lg:py-12">
                                {/* <p class="mb-2 text-center font-semibold text-slate-900 md:mb-3 lg:text-lg">Sevelian </p> */}

                                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Effortless Style with Linen Shirts
                                </h2>

                                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Linen shirts are the ultimate blend of comfort and sophistication. Perfect for warm weather, linen's breathable and lightweight texture keeps you cool while exuding effortless elegance. With their natural fibers and crisp yet relaxed look, linen shirts are a wardrobe essential for anyone who values style and comfort. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LinenInfo