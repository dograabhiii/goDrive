const mongoose=require("mongoose")
const prodSchema=mongoose.Schema({
    img:String,
    price:String,
    model:String,
    mark:String,
    year:String,
    seating:String,
    ac:String,
    tranacsmission:String,
    fuel:String,
})

const vehModel = mongoose.model("vehichleinfos",prodSchema,"vehichleinfos");
module.exports = vehModel;