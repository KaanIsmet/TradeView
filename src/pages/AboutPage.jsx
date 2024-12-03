import React from "react";

function AboutPage() {
    return (
        <div
            className="bg-gradient-to-r from-black via-blue-900 to-indigo-800 bg-cover bg-center min-h-screen relative">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-70 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed"></div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white px-8 py-16">
                <h1 className="text-4xl font-bold mb-6">About Our Platform</h1>
                <p className="text-lg max-w-3xl text-center leading-relaxed">
                    Welcome to our stock analysis and visualization platform! This application is designed to empower investors and enthusiasts with an easy-to-use interface for exploring stock data, visualizing trends, and making informed decisions.
                </p>
                
                {/* Features Section */}
                <div className="mt-8 max-w-4xl">
                    <h2 className="text-2xl font-semibold mb-4">How to Use the Platform</h2>
                    <ul className="list-disc list-inside space-y-3 text-left">
                        <li>
                            Use the <strong>Search Form</strong> to find stocks by their symbol (e.g., "AAPL" for Apple, "GOOGL" for Alphabet).
                        </li>
                        <li>
                            View detailed stock performance, including open, high, low, close, and volume values, displayed in an intuitive chart format.
                        </li>
                        <li>
                            Customize the visualization by selecting different time intervals (daily, weekly, or monthly) to suit your analysis needs.
                        </li>
                        <li>
                            Access the latest company news and trending articles to gain context for your investments.
                        </li>
                    </ul>
                </div>

                {/* Key Features */}
                <div className="mt-8 max-w-4xl">
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="list-disc list-inside space-y-3 text-left">
                        <li>Interactive stock charts powered by reliable financial APIs.</li>
                        <li>Customizable technical indicators for deeper analysis.</li>
                        <li>Real-time updates for stock data and news articles.</li>
                        <li>User-friendly interface for beginners and seasoned investors alike.</li>
                        <li>Secure login with OAuth to personalize your experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
