const express=require("express");
const app=express();
// const Usercontroller=require("./controllers/usercontroller")
const productController = require("./controllers/product.controller")
const SignupController=require("./controllers/SignupController")
const loginController=require("./controllers/loginController")

app.use(express.json());
// app.post("/user",Usercontroller);
// app.use("/users", userController);
app.use("/Signup", SignupController);
app.use("/login",loginController);
app.use("/products", productController);

module.exports=app;