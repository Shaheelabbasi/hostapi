require('dotenv').config();
const express=require('express')
const app=express()
const PORT=process.env.port || 8000
const product_routes=require("./routes/product")
const db=require("./db/connect")
// database connection
db()


app.get("/",(req,res)=>{
   

    res.send("i am live")
})
app.use("/api/products",product_routes)

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})
