import mongojs from 'mongojs'
import Time from "./time"

const database = "timeClock"
const collection = ["entries"]



var db = mongojs(database,collection)

newTime = () => {
    var newTime = new Time()   
    console.log("The Time is " + newTime.time)
    return newTime 
}

addTime = () => {
    db.entries.insert({time:newTime().time})
    getAll()
}

remove = (time) =>{
    db.entries.remove({time:time})
    getAll()
}

removeAll = () => {
    db.entries.remove({})
    getAll()
    db.entries.close()
}

getAll = () => {
    db.entries.find({},(err,res)=>{
        console.log(res)
    })
}