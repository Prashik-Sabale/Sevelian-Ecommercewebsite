import React from 'react';
import bgimage from '../assets/images/outfit.jpg';
// import bgimage from '../assets/images/outfit2.jpg';
// import bigbg from '../assets/images/bigbg.png';

const LinenInfo = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8  ">
                    <div className="space-y-4 md:space-y-8 ">
                        <section className='overflow-hidden rounded-lg '>
                            <img
                                src={bgimage}
                                className="rounded h-32 w-full object-cover md:h-full"
                                alt=""
                            />
                        </section>
                        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
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