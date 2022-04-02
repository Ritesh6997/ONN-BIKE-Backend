const express=require("express");

const router=express.Router();

const Cart=require("../model/cart");

router.post("",async(req,res)=>{
    try {
       let  Dart=await Cart.deleteMany({userId:req.body.userId});
       const cart=await Cart.create(req.body);
        return res.status(201).send(cart);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.get("/:id",async(req,res)=>{
    try {
        const cart=await Cart.findOne({userId:req.params.id}).populate({
            path:"productId",
        }).lean().exec();
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const cart=await Cart.findOneAndDelete({userId:req.params.id}).lean().exec();
        return res.status(201).send(cart);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})
module.exports=router;