import React from 'react';
import icon1 from '../assets/icons/free-shipping.png';
import icon2 from '../assets/icons/online-chat.png';
import icon3 from '../assets/icons/verify.png';


const Support = () => {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
                        <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                            <div class="text-center text-gray-600 size-10"><img src={icon1} alt="" srcset="" /></div>
                            <span>Free Shipping</span>
                            <div className=' text-center text-gray-600'>
                                <span>Enjoy free worldwide shipping and returns, with customs
                                    and duties taxes included.</span>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                            <div class="text-center text-gray-600 size-10"><img src={icon2} alt="" srcset="" /></div>
                            <span>Support Online</span>
                            <div className=' text-center text-gray-600'>
                                <span>We support customers 24/7, send questions we will
                                    solve for you immediately.</span>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                            <div class="text-center text-gray-600 size-10"><img src={icon3} alt="" srcset="" /></div>
                            <span>Free Returns</span>
                            <div className=' text-center text-gray-600'>
                                <span>Free returns within 15 days, please make sure the items
                                    are in undamaged condition.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support