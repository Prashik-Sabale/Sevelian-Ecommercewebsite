import React, { useState } from "react";

const SearchBox = () => {
    const [inputValue, setInputValue] = useState("");

    const handleReset = () => {
        setInputValue("");
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen overflow-hidden">
            <div className="relative inline-block border-2 border-black rounded-full">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder=""
                    className={`w-10 h-10 px-2 transition-all duration-800 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] focus:w-72 focus:outline-none placeholder-transparent text-lg font-bold rounded-full`}
                />
                {inputValue && (
                    <button
                        type="button"
                        onClick={handleReset}
                        className="absolute top-2 right-2 w-5 h-5 flex justify-center items-center transform rotate-45 translate-y-9 transition-transform duration-150 ease-out focus:translate-y-0"
                    >
                        <span className="absolute block w-[0.125rem] h-full bg-black transform rotate-0" />
                        <span className="absolute block w-[0.125rem] h-full bg-black transform rotate-90" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBox;
