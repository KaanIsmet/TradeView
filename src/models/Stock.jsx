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
        let str = stockFunction.split("_")
        str.reverse()
        let temp = str[2]
        str[2] = str[1]
        str[1] = temp

        for (let i = 0; i < str.length; i++) {
            let word = str[i]
            str[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
        this.stockFunction = str.join(" ").trim()

        this.timeSeries = this.processData(data)

    }

    processData(data) {
        const currentYear = new Date().getFullYear()
        const fiveYearsAgo = currentYear - 5
        console.log(data)
        console.log(this.stockFunction)
        if (typeof data === "object" && data !== null) {
            console.log("stock data has been processed")
            const processedData = Object.entries(
                Object.entries(data[this.stockFunction])
                    .filter(([date]) => {
                        const year = parseInt(date.split("-")[0], 10)
                        return year >= fiveYearsAgo
                    })
                    .map(([date, values]) => {
                        return {
                            date,
                            close: parseFloat(values["4. close"])
                        }
                    }) 
            )
            console.log(processedData)
            return processedData
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

    getStockFunction() {
        return this.stockFunction
    }

    setStockFunction(stockFunction) {
        this.stockFunction = stockFunction
    }
}