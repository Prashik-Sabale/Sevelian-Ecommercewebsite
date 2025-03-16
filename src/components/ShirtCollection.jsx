import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";

const ShirtCollection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {

            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
                const productsWithImages = await Promise.all(
                    response.data.map(async (product) => {
                        const imageResponse = await axios.get(
                            `${process.env.REACT_APP_API_URL}/api/product/${product.id}/image`,
                            { responseType: "blob" }
                        );
                        product.image = URL.createObjectURL(imageResponse.data);
                        return product;
                    })
                );
                setProducts(productsWithImages);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center m-80">
                <div className="relative w-16 h-16">
                    <div className="absolute w-full h-full border-2 border-t-black border-r-transparent rounded-full animate-spin"></div>
                </div>
            </div>

        );
    }

    if (error) {
        // toast.error("Oops! Something went wrong.");
        toast.error('Oops! Something went wrong.', {
            position: "top-center"
        })
        return (
            <div>
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="flex flex-col items-center">
                            <h1 className=" text-center text-2xl font-bold text-gray-500 md:text-3xl">500 | Internal server error</h1>
                            <p className="max-w-screen-md text-center font-bold text-gray-500 md:text-lg">Oops! Something went wrong. </p>
                            <p className="mb-40 max-w-screen-md text-center font-semibold text-gray-500 md:text-xs">"Server Is Under Deployement" </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <header className="text-center">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl p-8">
                    Linen Shirt Collection
                </h2>
                <p className="mx-auto mt-4 max-w-md text-gray-500">
                    All new Linen Shirts, Exclusively launched in sale. With stretch &
                    an elevated look.
                </p>
            </header>
            <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-4xl xl:max-w-5xl mx-auto">
                {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};

export default ShirtCollection;
