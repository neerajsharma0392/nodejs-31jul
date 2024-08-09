const express= require("express");
const app = express();

const {data} = require("./data.js");
app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("pages/index",{products:data});
})

app.listen(process.env.PORT,()=>{
    console.log("Server listening on port 3000");
})