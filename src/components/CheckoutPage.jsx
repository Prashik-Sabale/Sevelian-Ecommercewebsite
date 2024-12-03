import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaCreditCard } from 'react-icons/fa';
import { products } from '../services/Products';
import CartItem from './cartItem';

const CheckoutPage = () => {
    const carts = useSelector(store => store.cart.items);

    // Calculate total price
    const calculateTotal = () => {
        return carts.reduce((total, item) => {
            const product = products.find(prod => prod.id === item.productId);
            return total + (product?.price || 0) * item.quantity;
        }, 0);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-black flex items-center justify-center">
                <FaShoppingCart className="mr-2 text-green-600" /> Checkout
            </h1>

            {/* Check if the cart is empty */}
            {carts.length === 0 ? (
                <div className="text-center text-xl text-gray-600 mt-8">
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cart Items Section */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                        {carts.map((item, key) => (
                            <CartItem key={key} data={item} />
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-semibold">Free</span>
                        </div>
                        <hr className="mb-4" />
                        <div className="flex justify-between items-center text-lg font-bold mb-6">
                            <span>Total</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>

                        {/* Checkout Form */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Shipping Information</h3>
                            <form className="space-y-4">
                                <div className="flex flex-col">
                                    <label className="text-gray-600">Full Name</label>
                                    <input type="text" placeholder="Enter your full name" className="p-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-600">Address</label>
                                    <input type="text" placeholder="Enter your shipping address" className="p-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-600">Phone Number</label>
                                    <input type="text" placeholder="Enter your phone number" className="p-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-600">Email Address</label>
                                    <input type="email" placeholder="Enter your email address" className="p-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-600">Payment Method</label>
                                    <select className="p-2 border border-gray-300 rounded-md">
                                        <option>Credit/Debit Card</option>
                                        <option>PayPal</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        {/* Place Order Button */}
                        <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all duration-200">
                            <FaCreditCard className="mr-2 inline-block" />
                            Place Order
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
