
export class Stock {

    constructor(symbol, stockFunction, interval ,data) {
        console.log("creating stock")
        this.symbol = symbol
        this.interval = interval
        let str = ""
        if (stockFunction === "TIME_SERIES_DAILY") {
            str = "Time Series (Daily)"
            this.stockFunction = str
            this.timeSeries = this.processData(data)
        }

        else if (stockFunction === "TIME_SERIES_INTRADAY") { 
            str = `Time Series (${this.interval})`
            this.stockFunction = str
            this.timeSeries = this.processData(data)
        }
        else {
            str = stockFunction.split("_")
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

    }

    processData(data) {
        const currentYear = new Date().getFullYear();
        const fiveYearsAgo = currentYear - 5;
        let processedData = null;
    
        console.log("Processing data:", data);
        console.log("Stock function key:", this.stockFunction);
    
        if (!data || typeof data !== "object" || !data[this.stockFunction]) {
            console.error(`Invalid or missing data for key "${this.stockFunction}".`);
            return [];
        }
    
        if (this.interval != "") {
            processedData = Object.entries(data[this.stockFunction])
                .map(([date, values]) => ({
                    date: new Date(date),
                    close: parseFloat(values["4. close"])
                }))
                .sort((a, b) => a.date - b.date)
                return processedData;
        }
        processedData = Object.entries(data[this.stockFunction])
            .filter(([date]) => {
                const year = parseInt(date.split("-")[0], 10);
                return year >= fiveYearsAgo;
            })
            .map(([date, values]) => ({
                date,
                close: parseFloat(values["4. close"])
            }));
    
        console.log("Processed data:", processedData);
        return processedData;
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

    getInterval() {
        return this.getInterval
    }

    setInterval(interval) {
        this.interval = interval
    }
}