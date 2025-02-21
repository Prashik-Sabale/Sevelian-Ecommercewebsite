import React from 'react';
import Secimg from "../assets/images/bluesky.jpg"

const TheSection = () => {
    return (
        <div>
            {/* <section className='overflow-hidden rounded-lg '>
                <img
                    src={Secimg}
                    className=" h-32 w-full object-cover md:h-full"
                    alt=""
                />
            </section> */}
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="space-y-4 md:space-y-8">
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                                Taylor Stitch Clothing
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Elevate your style with Taylor Stitch Clothing—where timeless design meets exceptional craftsmanship. Our collection blends comfort, durability, and sustainability, ensuring you look and feel your best every day.
                            </p>
                        </div>

                        <img
                            src={Secimg}
                            className=""
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TheSection