import React from 'react'
import ProductCard from './ProductCard';
import { items } from '../Data/Tshirts';

const TShirtCollection = () => {
    return (

        <div>
            <header className="text-center">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl p-8">Linen Shirt Collection</h2>

                <p className="mx-auto mt-4 max-w-md text-gray-500">
                    All new Linen Shirts , Exclusively launched in sale. With stretch & an elevated look.
                </p>
            </header>
            <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto'>
                {items.map((product, key) =>
                    <ProductCard key={key} data={product} />
                )}
            </div>
        </div>
    )
}

export default TShirtCollection