import React from 'react'
import TShirtProductCard from './TShirtProductCard';
import { items } from '../Data/Tshirts';

const TShirtCollection = () => {
    return (

        <div>
            <header className="text-center">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl p-8">T-Shirt Collection</h2>

                <p className="mx-auto mt-4 max-w-md text-gray-500">
                    All new T-Shirt Collection , Exclusively launched in sale. With stretch & an elevated look.
                </p>
            </header>
            <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto'>
                {items.map((items, key) =>
                    <TShirtProductCard key={key} data={items} />
                )}
            </div>
        </div>
    )
}

export default TShirtCollection