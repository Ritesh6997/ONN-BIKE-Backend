const express=require("express");
const {Signup,login} = require("./controllers/auth.controller")
const { body, validationResult } = require('express-validator')
const router=express.Router()

router.post("",
body('email').not().isEmpty().isEmail().
custom(async(value) => {
    const user= await User.findOne({"email":value}).lean().exec();
    if (user) {
      throw new Error('Email is already register');
    }
    return true;
}),login)
module.exports=router;