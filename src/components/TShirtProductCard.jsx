import React from 'react';
import { addToCart } from '../stores/cart';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// toster 
import toast, { Toaster } from 'react-hot-toast';



const TShirtProductCard = (props) => {

    const carts = useSelector(store => store.cart.items);
    console.log(carts);


    // const notify = () => toast.success('Successfully Added !');

    const { id, name, price, image, shortdsc, slug, available } = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        toast.success("Item added to cart!");
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

    // const { id } = useParams();
    // const [product, setProduct] = useState(null);
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/api/product/${id}`);
    //             setProduct(response.data);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error("Error fetching product:", error);
    //         }
    //     };

    //     fetchProduct();
    // }, [id]);
    // if (!product) {
    //     return (
    //         <h2 className="text-center" style={{ padding: "10rem" }}>
    //             Loading...
    //         </h2>
    //     );
    // }

    return (
        <div>
            <div className=' cursor-pointer rounded-2xl h-[300px] flex items-center justify-center  '>
                <Link to={slug}><img class="object-cover rounded-3xl  w-[200px]" src={image} alt="product image" /></Link>
            </div>
            <div class="mt-4 px-5 pb-5">
                <div className='flex justify-start items-start  '>
                    <div class="text-xl text-black">{name}</div>
                </div>
                <div className='flex justify-start '>
                    <div className='text-gray-600 text-base'>{shortdsc}</div>
                </div>

                {/* instock */}
                {/* <div>
                    <div class="relative inline-flex">
                        <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                        <div class="w-4 h-4 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                        <div class="w-4 h-4 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                    </div>
                    <p class="ml-[25px] text-xs mt-[-16px]">{available}</p>
                </div> */}
                <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span class="text-xl text-slate-900">₹ {price}</span>
                        <span class="text-xs text-red-500 line-through px-2">₹ 3,000</span>
                        {/* <span className='text-green-600'>{off}</span> */}
                    </p>
                </div>
                <button onClick={handleAddToCart} className="bg-black flex items-center w-full px-5 py-2.5  text-center text-sm font-medium justify-center text-white rounded-md hover:bg-gray-700 transition-colors  " >Add Bag</button>
                {/* <button onClick={notify} className="bg-black flex items-center w-full px-5 py-2.5  text-center text-sm font-medium justify-center text-white rounded-md hover:bg-gray-700 transition-colors  " >Bag</button> */}
            </div>
        </div>
    )
}

export default TShirtProductCard;
