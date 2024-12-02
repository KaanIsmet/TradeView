import React from "react";

function StocksForm({stockSymbol, setStockSymbol, stockFunction, setStockFunction, interval, setInterval, handleSubmit}) {
    return (
        <div className="mt-10 mx-auto max-w-lg p-6 rounded-lg border border-gray-300" >
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                    <label htmlFor="stockSymbol" className="text-left text-lg font-semibold mb-2">Stock Symbol</label>
                    <input 
                    type="text"
                    id={"stockSymbol"}
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                    placeholder="Enter stock symbol (e.g., APPL)"
                    required
                    className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                    />

                    <label htmlFor="stockFunction" className="text-left text-lg font-semibold mb-2">Function</label>
                    <select 
                    name="stockFunction" 
                    id="stockFunction" 
                    value={stockFunction}
                    onChange={(e) => setStockFunction(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                    >
                            <option value={""} disabled>Select an option</option>
                            <option value={"intraday"}>intraday</option>
                            <option value={"daily"}>daily</option>
                            <option value={"weekly"}>weekly</option>
                            <option value={"monthly"}>monthly</option>
                    </select>
                    {stockFunction == "intraday" && (
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="interval" className="text-left text-lg font-semibold mb-2">
                            Interval
                        </label>
                        <select
                            id="interval"
                            value={interval}
                            onChange={(e) => setInterval(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none"
                            required
                        >
                            <option value="" disabled>
                                Select an interval
                            </option>
                            <option value="1min">1 Minute</option>
                            <option value="5min">5 Minutes</option>
                            <option value="15min">15 Minutes</option>
                            <option value="30min">30 Minutes</option>
                            <option value="60min">60 Minutes</option>
                        </select>
                    </div>
                )}
                            
                    


                    <label htmlFor=""></label>
                    <button
                        type="submit"
                        className="bg-transparent hover:bg-indigo-700 text-indigo-700 hover:text-white py-2 rounded-md mt-4 relative overflow-hidden border-2 border-indigo-700"
                    >Submit</button>

                </div>
                
            </form>
        </div>
    )
}

export default StocksForm