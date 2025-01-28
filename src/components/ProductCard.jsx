import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
    const { id, name, price, image, shortdsc, slug, discount } = data;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        toast.success("Item added to your cart! 🎉");
        dispatch(addToCart({ productId: id, quantity: 1 }));
    };

    return (
        <div>
            <div className="cursor-pointer rounded-2xl h-[300px] flex items-center justify-center">
                <Link to={slug}>
                    <img
                        className="object-cover rounded-3xl w-[200px]"
                        src={image}
                        alt={`${name} product`}
                    />
                </Link>
            </div>
            <div className="mt-4 px-5 pb-5">
                <div className="flex justify-start items-start">
                    <div className="text-xl text-black">{name}</div>
                </div>
                <div className="flex justify-start">
                    <div className="text-gray-600 text-base">{shortdsc}</div>
                </div>

                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-xl text-slate-900">₹ {price}</span>
                        <span className="text-xs text-red-500 line-through px-2">₹ 3,000</span>
                    </p>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="bg-black flex items-center w-full px-5 py-2.5 text-center text-sm font-medium justify-center text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                    Add to Bag
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
