const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')

const app=express();

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("dcqkcjbjchb")
})

app.use("/auth", authRouter)
app.use("/api/users",userRouter)

module.exports=app;