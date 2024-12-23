import React from 'react';
import img from '../assets/images/category3.jpg'

const Sale = () => {
    return (
        <div>
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
            </div>
            {/* ************************************************Section************************* */}
            <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
                <img
                    alt=""
                    src={img}
                    className="h-32 w-full object-cover md:h-full"
                />

                <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p className="text-sm font-semibold uppercase pb-4 tracking-widest">Run with the pack</p>
                    <span
                        className="whitespace-nowrap rounded-full border border-red-600 px-2.5 py-0.5 text-sm text-red-600"
                    >
                        Live
                    </span>

                    <h2 className="mt-6 font-black uppercase">
                        <span className="text-4xl font-black sm:text-5xl lg:text-6xl">Get 20% off </span>

                        <span className="mt-2 block text-sm">On your First order over ₹5,000</span>
                    </h2>

                    <a
                        className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                        href="#"
                    // onClick={() => dispatch(Add())}
                    >
                        Get Discount
                    </a>

                    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                        Offer valid until 7 th November, 2025 *
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Sale

