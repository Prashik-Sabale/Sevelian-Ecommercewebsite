import React from 'react';
import { FaXmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { openTab } from '../stores/cart';

const SearchTab = () => {
    const dispatch = useDispatch();
    return (
        <div className=" bg-black bg-opacity-50 fixed z-50 top-0 left-0 w-full h-screen ">
            <div className="h-full bg-white sm:w-[30rem] min-w-[15rem] overflow-y-auto">
                <div className="p-7">
                    <div className="flex items-center justify-between over">
                        <div className="flex items-center cursor-pointer">
                            {/* <Search /> */}
                            <div className="flex items-center bg-white border border-gray-300 rounded-3xl shadow-sm p-4 w-96 mx-auto">
                                <IoSearch className="text-gray-500 mr-3" size={20} />
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="flex-grow outline-none text-gray-700 text-sm"
                                />
                                <button onClick={() => dispatch(openTab())} className="ml-3 text-gray-500 hover:text-gray-700">
                                    <FaXmark size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTab