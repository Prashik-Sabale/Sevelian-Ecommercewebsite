import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeQuantity, removeFromCart } from '../../stores/cart';
import { products } from '../../services/Products';

const Cart = (props) => {
    // const { productId, quantity } = props.data;
    const [detail, setDetail] = useState([]);

    const { productId } = props.data || {};


    // Access the cart items from Redux store
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])

    // *******************
    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    // ********************

    const handleMinusQuantity = (productId, quantity) => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    };

    const handlePlusQuantity = (productId, quantity) => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const productDetail = products.find(product => product.id === item.productId);
            return total + (productDetail ? productDetail.price * item.quantity : 0);
        }, 0).toFixed(2);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cart Items Section */}
                <div className="md:col-span-2">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.productId} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="ml-4 flex-grow">
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">Price: ${item.price}</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            className='w-8 h-8 text-white bg-black rounded-full'
                                            onClick={handleMinusQuantity}
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-1 border">{item.quantity}</span>
                                        <button
                                            className='w-8 h-8 text-white bg-black rounded-full'
                                            onClick={handlePlusQuantity}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.productId)}
                                    className="text-red-600 hover:underline font-semibold ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-gray-600 text-lg text-center pt-5">Your Cart feels lonely !! </h1>
                    )}
                </div>

                {/* Summary Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">${calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold">Free</span>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex justify-between items-center text-lg font-bold mb-6">
                        <span>Total</span>
                        <span>${calculateTotal()}</span>
                    </div>
                    <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
