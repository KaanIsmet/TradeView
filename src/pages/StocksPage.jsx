import React from "react";
import LinePlot from "../components/LinePlot";
import StocksForm from "../components/StocksForm";
import { useNavigate } from "react-router-dom";
import { symbol } from "d3";
import { Stock } from "../models/Stock";

function StocksPage() {
    const [stockSymbol, setStockSymbol] = React.useState("")
    const [stockFunction, setStockFunction] = React.useState("")
    const [interval, setInterval] = React.useState("")
    const [stockData, setStockData] = React.useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;

            if (interval === "") {
                response = await fetch(`http://localhost:8080/api/v1/stocks/${stockSymbol}/${stockFunction}`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"}
                });
            }
            else {
                response = await fetch(`http://localhost:8080/api/v1/stocks/${stockSymbol}/${stockFunction}/${interval}`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"}
                });
            }
            if (response.ok) {
                const data = await response.json()
                const stock = new Stock (symbol, stockFunction, interval ,data)
                const timeSeries = stock.getTimeSeries() || {};
                setStockData(timeSeries)
                console.log(timeSeries)
            }
            else {
                console.log("unable to fetch stock data")
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div
            className={"bg-gradient-to-r from-black via-blue-900 to-indigo-800 bg-cover bg-center min-h-screen relative"}>
            <div
                className="absolute inset-0 bg-black opacity-70 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed">
            </div>
            <div className="text-center text-white pt-40 relative z-10">
            <h1 className="text-5xl font-bold">TradeView</h1>
            <p className="mt-4 text-lg">Search for stock information and visualize market data with ease</p>
                <StocksForm
                    stockSymbol={stockSymbol}
                    setStockSymbol={setStockSymbol}
                    stockFunction={stockFunction}
                    setStockFunction={setStockFunction}
                    interval={interval}
                    setInterval={setInterval}
                    handleSubmit={handleSubmit}
                />

                {stockData.length > 0 && (
                    <div className="mt-8">
                        <LinePlot data={stockData}/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default StocksPage;