/*data structures for Stock
    stock
        attributes
        ~~~~~~~~~~
        string symbol
        TimeSeries timeSeries

    TimeSeries
        attributes
        ~~~~~~~~~~
        string timeSeries
        Interval interval
    
    Interval
        attributes
        ~~~~~~~~~~
        double open
        double high
        double low
        double close
        int volume
*/


export class Stock {

    constructor(symbol, stockFunction ,data) {
        this.symbol = symbol
        this.stockFunction = stockFunction.split("_").join(" ")
        this.timeSeries = this.processData(data)

    }

    processData(data) {
        console.log(data)
        console.log(this.stockFunction)
        if (typeof data === "object" && data !== null) {
            console.log("stock data has been processed")
            return data
        }
        else {
            console.log("unable to read data")
            return null
        }

    }

    getSymbol() {
        return this.symbol
    }

    setSymbol(symbol) {
        this.symbol = symbol
    }

    getTimeSeries() {
        return this.timeSeries
    }

    setTimeSeries(timeSeries) {
        this.timeSeries = timeSeries
    }
}