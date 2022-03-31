const express=require("express");
const app=express();
const Usercontroller=require("./controllers/userController")
const productController = require("./controllers/productController")
const SignupController=require("./controllers/SignupController")
const loginController=require("./controllers/loginController")

app.use(express.json());
app.use("/users", Usercontroller);
app.use("/Signup", SignupController);
app.use("/login",loginController);
app.use("/products", productController);

module.exports=app;