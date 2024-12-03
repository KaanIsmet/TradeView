import React from "react";
import {useNavigate} from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

function RegistrationPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");
    const navigate = useNavigate();
    const role = "User"
    const enabled = true

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/v1/users", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    name,
                    password,
                    email,
                    role,
                    enabled
                }),
                headers: {"Content-Type": "application/json"}
            });

            if (response.ok) {
                const result = await response.json();
                setMessage(result.message || "registration succussfully registered");
                navigate("/");
            }
            else{
                const error = await response.json();
                setMessage(error || "Unable to register");
            }
        }
        catch (e) {
            console.log(e);
        }
    }




    return (
        <div className={"bg-gradient-to-r from-black via-blue-900 to-indigo-800 bg-cover bg-center min-h-screen relative"}>
            <div className={"absolute inset-0 bg-black opacity-70 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed"}></div>
            {/* Main content */}
            <div className="text-center text-white pt-40 relative z-10">
                <h1 className="text-5xl font-bold">Welcome to TradeView</h1>
                <p className="mt-4 text-lg">Explore the stock market with powerful insights</p>
                {/* Render the Form Component */}
                <RegistrationForm

                    username={username}
                    setUsername={setUsername}
                    name={name}
                    setName={setName}
                    password={password}
                    setPassword={setPassword}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                    message={message}
                />
            </div>
        </div>

    )
}

export default RegistrationPage