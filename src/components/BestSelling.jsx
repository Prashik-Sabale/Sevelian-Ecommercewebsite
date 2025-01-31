import React, { useState } from 'react';
import { products } from '../Data/BestSellingProducts';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const BestSelling = () => {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="rounded-lg px-4 py-6 md:py-8 lg:py-12">
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">The Best Sellers
                            </h2>

                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Unmatched design—superior performance and customer satisfaction in one. </p>
                        </div>
                    </div>
                </div>
                <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto'>
                    {products.map((product, key) =>
                        <ProductCard key={key} data={product} />
                    )}
                </div>
                <div className=' text-center'>
                    <Link to="/Shirts"><button onClick={() => { setIsToggle(!isToggle) }} className=" w-full md:w-auto mt-10 mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-black shadow-xs  transition-all duration-500">Shop all
                    </button></Link>
                </div>
            </div>
        </div>
    )
}

export default BestSelling