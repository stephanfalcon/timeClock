

class Time {     
    constructor(){
        this.date = new Date()

        this.hours = this.date.getHours()
        this.minutes = this.date.getMinutes()
        this.seconds = this.date.getSeconds()

        if(this.hours > 12){
            this.hours -= 12
        }

        this.time = `${this.hours}:${this.minutes}:${this.seconds}`
    }
}

module.exports = Time