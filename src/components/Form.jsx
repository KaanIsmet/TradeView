import React from "react";
import {Link} from "react-router-dom";

function Form({ username, setUsername, password, setPassword, handleSubmit, message }) {
    return (
        <div className="mt-10 mx-auto max-w-lg p-6 rounded-lg border border-gray-300">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

            {/* Feedback message */}
            {message && <p className="mt-4 text-red-500">{message}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-left text-lg font-semibold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-left text-lg font-semibold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-transparent hover:bg-indigo-700 text-indigo-700 hover:text-white py-2 rounded-md mt-4 relative overflow-hidden border-2 border-indigo-700"
                >
                    <span
                        className="absolute inset-0 w-full h-full bg-indigo-600 transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></span>
                    Login
                </button>
                <span>Don't have an account? <Link to={"/registration"} className={"text-indigo-700"}> Create an account </Link></span>
            </form>
        </div>
    );
}

export default Form;
