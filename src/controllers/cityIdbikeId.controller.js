const express = require('express');

const CityId_BikeId = require("../model/CityId_bikeId")

const router=express.Router()

router.post("",async(req,res)=>{

    try{
     const cityId_bikeId = await CityId_BikeId.create(req.body);

     return res.status(201).send(cityId_bikeId);
    }catch(err){
        return res.status(400).send({message:err.message})
    }
})


module.exports =router;