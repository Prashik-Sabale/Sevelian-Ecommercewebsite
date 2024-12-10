import React, { useState, useEffect } from 'react';
import { products } from '../Data/Products';
import { useDispatch } from 'react-redux';


const ReviewCart = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId]);

    return (
        <div>
            <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-4">
                        <img src={detail.image} alt="Product" className="w-12 h-12 rounded-md" />
                        <div>
                            <p className="font-semibold">{detail.name}</p>
                            <p className="text-sm text-gray-600">{detail.quantity}</p>
                        </div>
                    </div>
                    <span className="font-semibold p-3">₹{detail.price}</span>
                </div>
            </div>
        </div>

    )
}

export default ReviewCart