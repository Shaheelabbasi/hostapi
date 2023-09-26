const db=require("./db/connect")
const productJson=require("./data")
const product=require("./models/productmodel")
db()

const AddData=async()=>{

    try {
        const result= await product.create(productJson)

        console.log("success")
        
    } catch (error) {
        console.log(error)
    }


}

AddData();
