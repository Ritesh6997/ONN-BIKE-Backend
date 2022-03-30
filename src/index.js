const express=require("express");
const app=express();
// const Usercontroller=require("./controllers/usercontroller")
const productController = require("./controllers/product.controller")
const {Signup,login} = require("./controllers/auth.controller")
const { body, validationResult } = require('express-validator')
const SignupController=require("./controllers/SignupController")

app.use(express.json());
// app.post("/user",Usercontroller);
app.use("/users", userController);
app.use("/Signup", SignupController);
app.post("/login",validator,loginController);
app.use("/products", productController);

module.exports=app;