const mongoose=require("monogoose");
const connect =()=>{
    return mongoose.connect("");
};
module.exports=connect;