import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import { products } from '../Data/Products';
import axios from 'axios';

// import { useEffect, useParams, useState } from 'react';
// import axios from 'axios';

const ShirtCollection = () => {

    const Axios = () => {
        const getData = async () => {

            axios.get("http://localhost:8080/api/products").then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);

            })
            // const res = await fetch("http://localhost:8080/api/products");
            // const jsonData = await res.json();
            // console.log(jsonData);
        }

        useEffect(() => {
            getData()
        }, [])

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
            <div>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl p-8">Linen Shirt Collection</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        All new Linen Shirts , Exclusively launched in sale. With stretch & an elevated look.
                    </p>
                </header>
                <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto'>
                    {products.map((product, key) =>
                        <ProductCard key={key} data={product} />
                    )}
                </div>
            </div>

        </div>
    )
}

export default ShirtCollection