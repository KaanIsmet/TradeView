import React from "react";
import Form from "../components/Form";
import {Navigate, useNavigate} from "react-router-dom";


function HomePage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState("");
    const navigate = useNavigate();

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
                navigate("/stocks")
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
            <div className="absolute inset-0 bg-black opacity-70 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed"></div>
            {/* Main content */}
            <div className="text-center text-white pt-40 relative z-10">
                <h1 className="text-5xl font-bold">Welcome to TradeView</h1>
                <p className="mt-4 text-lg">Explore the stock market with powerful insights</p>
                {/* Render the Form Component */}
                <Form
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    message={message}
                />
            </div>
        </div>
    );
}

export default HomePage;
