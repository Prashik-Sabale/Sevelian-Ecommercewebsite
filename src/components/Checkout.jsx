import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { products } from '../services/Products';
import CartItem from './cartItem';
import ReviewCart from "./ReviewCart";

const Checkout = () => {
    const [shippingMethod, setShippingMethod] = useState("Delivery");
    const [discountCode, setDiscountCode] = useState("");
    const carts = useSelector(store => store.cart.items);


    // Calculate total price
    const calculateTotal = () => {
        return carts.reduce((total, item) => {
            const product = products.find(prod => prod.id === item.productId);
            return total + (product?.price || 0) * item.quantity;
        }, 0);
    };

    return (
        <>
            {carts.length === 0 ? (
                <div className="text-center text-xl text-gray-600 mt-36">
                    <p className=' mt-20'>Your cart is empty</p>
                </div>
            ) : (
                <div>
                    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-8">
                            <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Left Section: Shipping Information */}
                                <div className="md:col-span-2">
                                    <h2 className="text-lg font-medium mb-4">Shipping Information</h2>

                                    {/* Shipping Method */}
                                    <div className="flex space-x-4 mb-6">
                                        <button
                                            onClick={() => setShippingMethod("Delivery")}
                                            className={`flex-1 py-3 border rounded-lg text-center text-sm font-medium ${shippingMethod === "Delivery"
                                                ? "border-black bg-black text-white"
                                                : "border-gray-300 text-gray-700"
                                                }`}
                                        >
                                            Delivery
                                        </button>
                                        <button
                                            onClick={() => setShippingMethod("Pickup")}
                                            className={`flex-1 py-3 border rounded-lg text-center text-sm font-medium ${shippingMethod === "Pickup"
                                                ? "border-black bg-black text-white"
                                                : "border-gray-300 text-gray-700"
                                                }`}
                                        >
                                            Pick up
                                        </button>
                                    </div>

                                    {/* Form */}
                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Full name *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter full name"
                                                className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Email address *</label>
                                            <input
                                                type="email"
                                                placeholder="Enter email address"
                                                className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Phone number *</label>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 bg-gray-100 border border-gray-300 rounded-l-lg text-sm">
                                                    🇺🇸
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Enter phone number"
                                                    className="w-full border-t border-r border-b border-gray-300 rounded-r-lg p-3 focus:ring-2 focus:ring-black"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Country *</label>
                                            <select className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black">
                                                <option>Choose country</option>
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <input
                                                type="text"
                                                placeholder="City"
                                                className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                                            />
                                            <input
                                                type="text"
                                                placeholder="State"
                                                className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                                            />
                                            <input
                                                type="text"
                                                placeholder="ZIP Code"
                                                className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        <div className="flex items-center mt-4">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black"
                                            />
                                            <label className="ml-2 text-sm text-gray-700">
                                                I have read and agree to the Terms and Conditions.
                                            </label>
                                        </div>
                                    </form>
                                </div>

                                {/* Right Section: Review Cart */}
                                <div>
                                    <div>
                                        <h2 className="text-lg font-medium mb-4">Review your cart</h2>
                                        <div className="space-y-4">
                                            {carts.map((item, key) => (
                                                <ReviewCart key={key} data={item} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Discount Code */}
                                    <div className="mt-6">
                                        <input
                                            type="text"
                                            placeholder="Discount code"
                                            value={discountCode}
                                            onChange={(e) => setDiscountCode(e.target.value)}
                                            className="w-full border-gray-300 rounded-lg p-3 mb-2 focus:ring-2 focus:ring-black"
                                        />
                                        <button className="w-full bg-gray-800 text-white rounded-lg py-2">
                                            Apply
                                        </button>
                                    </div>

                                    {/* Price Summary */}
                                    <div className="mt-6 space-y-2">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <span>${calculateTotal().toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Shipping</span>
                                            <span>Free</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Discount</span>
                                            {/* <span>-$10.00</span> */}
                                            <span>NA</span>
                                        </div>
                                        <div className="flex justify-between font-semibold text-lg">
                                            <span>Total</span>
                                            <span>${calculateTotal().toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Pay Button */}
                                    <button className="w-full bg-black text-white rounded-lg py-3 mt-6 text-lg">
                                        Pay Now
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 text-center">
                                        Secure Checkout – SSL Encrypted
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            )}
        </>
    );
};

export default Checkout;


// {
//     carts.length === 0 ? (
//         <div className="text-center text-xl text-gray-600 mt-8">
//             <p className=' mt-40'>Your cart is empty</p>
//             <FaRegHeart className="mx-auto mt-4 text-4xl text-gray-400" />
//         </div>
//     ) : (
//         <div>
//             <h2 className="text-lg font-medium mb-4">Review your cart</h2>
//             <div className="space-y-4">
//                 {carts.map((item, key) => (
//                     <ReviewCart key={key} data={item} />
//                 ))}
//             </div>
//         </div>
//     )
// }