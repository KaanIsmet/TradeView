/* Interval
        attributes
        ~~~~~~~~~~
        double open
        double high
        double low
        double close
        int volume
*/

export class Interval {
    constructor(open, high, low, close, volume) {
        this.open = open
        this.high = high
        this.low = low
        this.close = close
        this.volume = volume
    }

    getOpen() {
        return this.open
    }

    getHigh() {
        return this.high
    }

    getLow() {
        return this.low
    }

    getClose() {
        return this.close
    }

    getVolume() {
        return this.volume
    }
}