const mongoose=require("mongoose");
const cityId_bikeId=new mongoose.Schema({
    bikeId:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
    cityId:{type:mongoose.Schema.Types.ObjectId,ref:"city"}
})