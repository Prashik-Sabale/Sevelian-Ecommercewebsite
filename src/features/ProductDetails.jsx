import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addToCart } from '../stores/cart';
import { products } from '../Data/Products';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();


    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if (findDetail.length > 0) {
            setDetail(findDetail[0]);
        } else {
            window.location.href = '/';
            navigate("/NotFound"); // Redirects to the Not Found page

        }
    }, [slug])


    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }));
    }
    return (
        <div>
            <div div class="bg-white py-6 sm:py-8 lg:py-12" >
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="grid gap-8 md:grid-cols-2">
                        <div class="grid gap-4 lg:grid-cols-5">
                            <div class="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                                <img src={detail.image} loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                        <div class="md:py-8">
                            <div class="mb-2 md:mb-3">
                                <span class="mb-0.5 inline-block text-gray-500">Elegant Clothing brands</span>
                                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">{detail.name}</h2>
                            </div>
                            <div class="mb-6 flex items-center md:mb-10">
                                <div class="-ml-1 flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <span class="ml-2 text-sm text-gray-500">4.2</span>

                                <a href="#" class="ml-4 text-sm font-semibold text-black transition duration-100 hover:text-slate-900 active:text-indigo-700">view all 47 reviews</a>
                            </div>
                            <div class="mb-4 md:mb-6">
                                <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Color</span>

                                <div class="flex flex-wrap gap-2">
                                    <span class="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100"></span>
                                    <button type="button" class="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
                                    <button type="button" class="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
                                    <button type="button" class="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
                                </div>
                            </div>
                            <div class="mb-8 md:mb-10">
                                <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Size</span>

                                <div class="flex flex-wrap gap-3">
                                    <button type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">XS</button>
                                    <button type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">S</button>
                                    <span class="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-black bg-black text-center text-sm font-semibold text-white">M</span>
                                    <button type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">L</button>
                                    <span class="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">XL</span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <div class="flex items-end gap-2">
                                    <span class="text-xl font-bold text-gray-800 md:text-2xl">₹{detail.price}</span>
                                    <span class="mb-0.5 text-red-500 line-through">₹30.00</span>
                                </div>

                                <span class="text-sm text-gray-500">incl. VAT plus shipping</span>
                            </div>
                            <div class="mb-6 flex items-center gap-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>

                                <span class="text-sm">2-4 day shipping</span>
                            </div>
                            <div className=' mb-5'>
                                <div class="bg-green-500 w-4 h-4 rounded-full "></div>
                                <p class="ml-[25px] text-xs mt-[-16px]">50+ pcs. in stock.</p>
                            </div>
                            <div class="flex gap-2.5">

                                <button href="#" onClick={handleAddToCart} class="inline-block flex-1 rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-text-slate-900 focus-visible:ring active:bg-black sm:flex-none md:text-base">Add to cart</button>

                                <button href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Buy now</button>
                            </div>
                            <div class="mt-10 md:mt-16 lg:mt-20">
                                <div class="mb-3 text-lg font-semibold text-gray-800">Description</div>

                                <p class="text-gray-500">
                                    {detail.description}<br /><br />

                                    <b>Size & Fit</b><br />

                                    Fit - slim fit
                                    Size - Model is wearing M size
                                    <br /><br />

                                    <b>Wash Care</b><br />
                                    Machine Wash
                                    <br /><br />

                                    <b>Specifications</b><br />
                                    casual wear, college wear<br />
                                    Plain<br />
                                    button down<br />
                                    100% linen<br />
                                    full sleeve<br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // *********************************************************************************************


    )
}

export default ProductDetails

