import React from "react";


function HomePage() {
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
            </div>
        </div>
    );
}

export default HomePage;
