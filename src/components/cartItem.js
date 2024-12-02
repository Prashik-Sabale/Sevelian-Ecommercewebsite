import React, { useState, useEffect } from 'react'
import { products } from '.././services/Products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {

    // const { productId, quantity } = props.data;
    const { productId, quantity } = props.data || {};

    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])

    // const handleRemove = (productId) => {
    //     dispatch(removeFromCart(productId));
    // };

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }

    return (
        // <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        //     <img src={detail.image} alt="" className='w-12' />
        //     <h3>{detail.name}</h3>
        //     <p>${detail.price * quantity}</p>
        //     <div className='w-20 flex justify-between gap-2'>
        //         <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
        //         <span>{quantity}</span>
        //         <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
        //     </div>
        // </div>

        <div>
            <div className="bg-gray-100 min-h-screen p-8">
                <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cart Items Section */}
                    <div className="md:col-span-2">

                        <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
                            <img src={detail.image} alt={detail.name} className="w-24 h-24 object-cover rounded-md" />
                            <div className="ml-4 flex-grow">
                                <h2 className="text-xl font-semibold">{detail.name}</h2>
                                <p className="text-gray-600">Price: ${detail.price}</p>
                                <div className="flex items-center mt-2">
                                    <button
                                        className='w-8 h-8 text-white bg-black rounded-full'
                                        onClick={handleMinusQuantity}
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-1 border">{quantity}</span>
                                    <button
                                        className='w-8 h-8 text-white bg-black rounded-full'
                                        onClick={handlePlusQuantity}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            {/* <button
                                onClick={() => handleRemove(item.productId)}
                                className="text-red-600 hover:underline font-semibold ml-4"
                            >
                                Remove
                            </button> */}
                        </div>
                    </div>

                    {/* Summary Section */}
                    {/* <div className="bg-white rounded-lg shadow-md p-6">
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CartItem
