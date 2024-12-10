import React from 'react';

const Loader = ({ show }) => {
    return show && (
        <div className="flex justify-center ">
            <div className="w-16 h-16 rounded-full bg-gray-800 animate-load-pulse"></div>
        </div>
    );
};

export default Loader;
