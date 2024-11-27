import React from "react";


function RegistrationForm({username, setUsername,name, setName, email, setEmail ,password, setPassword, handleSubmit, message}) {
    return (
        <div className="mt-10 mx-auto max-w-lg p-6 rounded-lg border border-gray-300">

            {/* Feedback message */}
            {message && <p className="mt-4 text-red-500">{message}</p>}

            <form onSubmit={handleSubmit} className={"flex flex-col space-y-4"}>
                <div className="flex flex-col space-y-4">
                    <label htmlFor={"name"} className="text-left text-lg font-semibold mb-2"> Name</label>
                    <input
                        type="text"
                        id={"name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                        required
                    />
                    <label htmlFor={"username"} className="text-left text-lg font-semibold mb-2">Username</label>
                    <input
                        type={"text"}
                        id={"username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                        required    
                    />
                    <label htmlFor={"email"} className="text-left text-lg font-semibold mb-2"> Email</label>
                    <input 
                        type={"text"} 
                        id={"email"} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                        required
                    />
                    <label htmlFor={"password"} className="text-left text-lg font-semibold mb-2"> Password</label>
                    <input
                        type={"password"}
                        id={"password"}
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
                    Register
                </button>


            </form>
        </div>
    )
}

export default RegistrationForm