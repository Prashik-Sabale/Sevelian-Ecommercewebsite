import React from "react";
import bg from '../assets/images/demo.png'

const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex items-center justify-center p-6">
                    <img
                        src={bg}
                        sizes={50}
                        alt="Sign Up Illustration"
                        className="w-3/4"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-indigo-500 text-center">Sign In</h2>
                    <p className=" text-center mb-6 font-sans text-lg font-semibold text-zinc-600">Welcome back you've been missed</p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your first name" className="p-3 border-gray-900 rounded w-full" />
                            <input type="text" placeholder="Your last name" className="p-3 border-gray-900 rounded w-full" />
                        </div>
                        <input type="email" placeholder="Enter Email ID" className="p-3 border-gray-900 rounded w-full" />
                        <input type="text" placeholder="Enter Phone" className="p-3 border-gray-900 rounded w-full" />
                        <input type="password" placeholder="Enter Password" className="p-3 border-gray-900 rounded w-full" />
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" className="w-4 h-4 " />
                            <label htmlFor="terms" className="text-sm">I agree to the <a href="#" className="text-indigo-600">Terms</a> and <a href="#" className="text-indigo-600">Privacy Policy</a>.</label>
                        </div>
                        <button className="w-full bg-indigo-500 font-bold text-white p-3 rounded hover:bg-indigo-600">Sign Up</button>
                    </form>
                    <div className="text-center mt-4">
                        <button className="border border-indigo-500 font-bold text-indigo-500 p-3 rounded w-full hover:bg-indigo-100">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
