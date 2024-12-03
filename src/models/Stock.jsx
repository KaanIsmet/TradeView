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
import { Interval } from "./Interval"
import { TimeSeries } from "./TimeSeries"


export class Stock {

    constructor(symbol, stockFunction ,data) {
        this.symbol = symbol
        this.stockFunction = stockFunction
        this.timeSeries = []

        this.processData(data)

    }

    processData(data) {
        if (data && data[this.stockFunction] && typeof data[this.stockFunction] === "object") {
            const timeSeriesData = data[this.stockFunction]
            for (const [time, intervalData] of Object.entries(timeSeriesData)) {
                const interval = new Interval (
                    parseFloat(intervalData["1. open"]),
                    parseFloat(intervalData["2. high"]),
                    parseFloat(intervalData["3. low"]),
                    parseFloat(intervalData["4. close"]),
                    parseInt(intervalData["5. volume"])
                )
                const timeSeries = new TimeSeries (time, interval)
                this.timeSeries.push(timeSeries)

            }
        }
        else {
            console.log("unable to read data")
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