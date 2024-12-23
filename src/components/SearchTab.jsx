import React from 'react';
import { FaXmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { openTab } from '../stores/cart';
import { products } from '../Data/Products';
import ProductCard from './ProductCard';


const SearchTab = () => {
    const dispatch = useDispatch();
    return (
        <div className="bg-black bg-opacity-50 fixed z-50 top-0 left-0 w-full h-screen">
            <div className="h-full bg-white sm:w-[30rem] w-full min-w-[15rem] overflow-y-auto">
                <div className="p-4 sm:p-7">
                    <div className="flex items-center justify-between">
                        <div className="w-full">
                            <div className="flex items-center bg-white border border-gray-950 rounded-full shadow-sm px-4 py-2 sm:py-4 w-full mx-auto">
                                <IoSearch className="text-gray-500 mr-2 sm:mr-3" size={20} />
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="flex-grow outline-none text-gray-700 text-sm sm:text-base"
                                />
                                <button
                                    onClick={() => dispatch(openTab())}
                                    className="ml-2 sm:ml-3 text-gray-500 hover:text-gray-700"
                                >
                                    <FaXmark size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mx-auto text-center mt-4 max-w-md text-gray-500">
                        All new Linen Shirts , Our Popular Products
                    </p>
                </div>
                <div className='section grid grid-cols-2'>
                    {products.map((product, key) =>
                        <ProductCard key={key} data={product} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchTab;
