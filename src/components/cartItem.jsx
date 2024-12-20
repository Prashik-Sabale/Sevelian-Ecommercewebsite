import React, { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { changeQuantity, removeFromCart } from '../stores/cart';
import { products } from '../Data/Products';
// import { items } from '../Data/Tshirts';

const CartItem = (props) => {
    const { productId, quantity } = props.data;

    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId]);

    // useEffect(() => {
    //     const findDetail = items.filter(item => item.id === productId)[0];
    //     setDetail(findDetail);
    // }, [productId]);

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    };

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
            <img src={detail.image} alt={detail.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">{detail.name}</h2>
                <p className="text-gray-600">Price: ₹{detail.price}</p>
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
            <button
                onClick={() => handleRemove(productId)}
                className="text-red-600 hover:underline font-semibold ml-4 flex items-center"
            >
                <FaTrash className="mr-2" /> Remove
            </button>
        </div>
    );
};

export default CartItem;
