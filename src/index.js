const express=require("express");
const app=express();
// const Usercontroller=require("./controllers/usercontroller")
const productController = require("./controllers/productController")
const SignupController=require("./controllers/SignupController")
const loginController=require("./controllers/loginController")
const passport1 = require("./configu/google-oauth")


app.use(express.json());
// app.post("/user",Usercontroller);
// app.use("/users", userController);
app.use("/Signup", SignupController);
app.use("/login",loginController);
app.use("/products", productController);

app.get('/auth/google',
  passport1.authenticate('google', { scope: ['profile', 'email'] }));
 
app.get(
'/auth/google/callback', 
  passport1.authenticate('google', { failureRedirect: '/login', session:false } ),

  function(req, res) {
    // const token = generateToken(req.user)
    return res.status(200).send({user:req.user})
  }
)

module.exports=app;