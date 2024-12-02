class Stock {
    constructor(symbol, timeSeries = new Map()) {
        this.symbol = symbol
        this.timeSeries = timeSeries
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