const express=require('express')
const router=express.Router()
const adminModel=require('../Model/admin.model')
router.post('/',(req,res)=>{
    let newAdmin=new adminModel({
        Name:req.body.Name,
        MobileNo:req.body.MobileNo,
        Location:req.body.Location,
        Service:req.body.Service,
        Email:req.body.Email,

    })
    newAdmin.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/',(req,res)=>{
    adminModel.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.put('/:id',(req,res)=>{
    const idQuery=req.params.id
    adminModel.findByIdAndUpdate(idQuery,{$set:req.body})
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.delete('/:id',(req,res)=>{
    const idQuery=req.params.id
    adminModel.findByIdAndDelete(idQuery)
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports=router