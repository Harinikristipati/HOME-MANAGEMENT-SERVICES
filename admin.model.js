const mongoose=require('mongoose')
const adminSchema=mongoose.Schema({
    Name:String,
    MobileNo:Number,
    Location:String,
    Service:String,

    Email:String,
   
})
const AdminModel=mongoose.model('admins',adminSchema)
module.exports=AdminModel