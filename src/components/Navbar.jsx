import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-black from-15% to-indigo-700 text-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                {/* Title */}
                <h1 className="text-2xl font-bold">
                    TradeView
                </h1>
                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        {/*<a href="/" className="hover:text-gray-200 transition">Home</a>*/}
                        <Link to="/" className={"hover:text-gray-200 transition"}>Home</Link>
                    </li>
                    <li>
                        {/*<a href="/stocks" className="hover:text-gray-200 transition">Stocks</a>*/}
                        <Link to={"/stocks"}className={"hover:text-gray-200 transition"}>Stocks</Link>
                    </li>
                    <li>
                        {/*<a href="/about" className="hover:text-gray-200 transition">About</a>*/}
                        <Link to={"/about"} className={"hover:text-gray-200 transition"}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
