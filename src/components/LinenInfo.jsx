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
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                Effortless Style with Linen Shirts
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Linen shirts are the ultimate blend of comfort and sophistication. Perfect for warm weather, linen's breathable and lightweight texture keeps you cool while exuding effortless elegance. With their natural fibers and crisp yet relaxed look, linen shirts are a wardrobe essential for anyone who values style and comfort.
                            </p>
                        </div>

                        <section className='overflow-hidden rounded-lg '>
                            <img
                                src={bgimage}
                                className="rounded h-32 w-full object-cover md:h-full"
                                alt=""
                            />
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LinenInfo