
export class TimeSeries {
    constructor(time, interval) {
        this.time = time
        this.interval = interval
    }

    getTimeSeries() {
        return this.time
    }

    getInterval() {
        return this.interval
    }
}