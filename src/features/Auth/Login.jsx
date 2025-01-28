import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
// import { toast } from 'react-toastify';


function Login() {

    const [password, setPasswordValue] = useState("");
    const [email, setsetEmailValue] = useState("");

    const setPassword = (e) => {
        setPasswordValue(e.target.value);
    }

    const setEmail = (e) => {
        setsetEmailValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        //prevent default
        e.preventDefault();

        //api call
        console.log("this is our data " + email + "   " + password)

        //create an object with userId and password for passing the api
        const data = {
            "email": email,
            "password": password
        }

        try {
            const response = await axios.post("http://localhost:5000/auth/login", data);
            console.log("this is the response " + response.data.email);

            if (!response.data) {
                toast.error("Oops! Your login attempt was unsuccessful.")//hot tost
            }
            else {
                toast.success("Welcome back! " + data.email + " You have successfully logged in.");//hottost
            }

        } catch {
            toast.error("Something went wrong on our end.")
        }


    }
    return (
        <>
            <div className="main">
                <div
                    class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                    <div class="w-full">
                        <div class="text-center">
                            <h1 class="text-3xl font-semibold text-gray-900">Log in</h1>
                            <p class="mt-2 text-gray-500">Log in below to access your account</p>
                        </div>
                        <div class="mt-5">
                            <form action="" onSubmit={handleSubmit}>
                                <div class="relative mt-6">
                                    <input type="email" name="email" id="email" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" value={email} onChange={setEmail} />
                                    <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                </div>
                                <div class="relative mt-6">
                                    <input type="password" name="password" id="password" required placeholder="Password" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" value={password} onChange={setPassword} />
                                    <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                </div>
                                <div class="my-6">
                                    <button type="submit" class="w-full rounded-md bg-black px-3 py-4 text-white">Log in</button>
                                </div>
                                <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                                    <a href="#!"
                                        class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"><Link to="/SignUp">Sign Up</Link>
                                    </a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;