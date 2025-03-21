import React from 'react';
import { useSelector } from 'react-redux';
import { FaTruck, FaRegHeart } from 'react-icons/fa';
import CartItem from '../components/cartItem';
import { products } from '../Data/Products';
import { Link } from 'react-router-dom';
import emptycartimg from '../assets/images/emptyCart.png';

const CartTab = () => {
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
                Shopping Cart
            </h1>
            {/* Check if the cart is empty */}
            {carts.length === 0 ? (
                <div className="text-center text-xl text-gray-600 mt-8">
                    <div className=' flex justify-center'>
                        <img src={emptycartimg} className='size-80 mt-10' alt="" srcset="" />
                    </div>
                    <Link to="/products"><button className="w-30 mt-5 bg-black text-white py-2 px-4 transition-all duration-200">
                        Start shopping
                    </button></Link>
                    {/* <p className=" mt-3">Your cart is currently empty.</p> */}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cart Items Section */}
                    <div className="md:col-span-2 space-y-6">
                        {carts.map((item, key) => (
                            <CartItem key={key} data={item} />
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4">
                        <h2 className="text-xl font-bold mb-4">
                            Order Summary <FaTruck className="inline ml-2 text-gray-600" />
                        </h2>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-semibold">₹{calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-semibold">Free</span>
                        </div>
                        <hr className="mb-4" />
                        <div className="flex justify-between items-center text-lg font-bold mb-6">
                            <span>Total</span>
                            <span>₹{calculateTotal().toFixed(2)}</span>
                        </div>
                        <Link to="/checkout">
                            <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all duration-200">
                                Estimate Shipping
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartTab;
