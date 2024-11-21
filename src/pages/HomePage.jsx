import React from "react";


function HomePage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respond = await fetch("http://localhost:8080/api/v1/users/validate", {
                method: "POST",
                body: JSON.stringify({username, password}),
                headers: {"Content-Type": "application/json"},
            });

            if (respond.ok) {
                const result = await respond.json();
                setMessage(result.message || "Login Successful");
            }

            else
            {
                const error = await respond.json();
                setMessage(error.message || "Invalid username or password");
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bg-gradient-to-r from-black via-blue-900 to-indigo-800 bg-cover bg-center min-h-screen relative">
            {/* Add a moving starry effect */}
            <div className="absolute inset-0 bg-black opacity-60 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed"></div>

            {/* Dark overlay on the background */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            {/* Main content */}
            <div className="text-center text-white pt-40 relative z-10">
                <h1 className="text-5xl font-bold">Welcome to TradeView</h1>
                <p className="mt-4 text-lg">Explore the stock market with powerful insights</p>
                <form className="flex flex-col items-center mt-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="px-4 py-2 rounded bg-gray-700 text-white mb-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-2 rounded bg-gray-700 text-white mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                {/* Feedback message */}
                {message && <p className="mt-4 text-red-500">{message}</p>}
            </div>
        </div>
    );
}

export default HomePage;
