import React from 'react';

const Loader = ({ show }) => {
    return show && (
        <div class="flex justify-center items-center ">
            <div class="relative inline-flex">
                <div class="w-8 h-8 bg-slate-800 rounded-full"></div>
                <div class="w-8 h-8 bg-slate-800 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div class="w-8 h-8 bg-slate-800 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
        </div>

    );
};

export default Loader;
