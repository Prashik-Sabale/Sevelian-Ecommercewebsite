import React from 'react';
import { addToCart } from '../stores/cart';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// toster 
import toast, { Toaster } from 'react-hot-toast';



const ProductCard = (props) => {

    const carts = useSelector(store => store.cart.items);
    console.log(carts);

    // const notify = () => toast.success('Successfully Added !');

    const { id, name, price, image, slug } = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        toast.success("Item added to cart!");
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
    return (
        <div>
            <div className=' cursor-pointer rounded-2xl h-[300px] flex items-center justify-center  '>
                <Link to={slug}><img class="object-cover rounded-3xl  w-[200px]" src={image} alt="product image" /></Link>
            </div>
            <div class="mt-4 px-5 pb-5">
                <div className='flex justify-start items-start  '>
                    <div class="text-xl font-bold text-black">{name}</div>
                </div>
                <div className='flex justify-start '>
                    <div className='text-gray-600'>{slug}</div>
                </div>

                <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span class="text-2xl font-bold text-slate-900">₹{price}</span>
                        <span class="text-sm text-red-500 line-through px-2">₹3000</span>
                        {/* <span className='text-green-600'>{off}</span> */}
                    </p>
                </div>
                <button onClick={handleAddToCart} className="bg-black flex items-center w-full px-5 py-2.5  text-center text-sm font-medium justify-center text-white rounded-md hover:bg-gray-700 transition-colors  " >Add Bag</button>
                {/* <button onClick={notify} className="bg-black flex items-center w-full px-5 py-2.5  text-center text-sm font-medium justify-center text-white rounded-md hover:bg-gray-700 transition-colors  " >Bag</button> */}
            </div>
        </div>
    )
}

export default ProductCard;
