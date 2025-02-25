const express = require('express');
const app = express()//server is ready now
const PORT = 5500;
const products = [{id:1001,title:"laptop",price:51000,quantity:5},{id:1002,title:"mobile",price:25000,quantity:3}];
app.use(express.json());
app.get("/products",(req,res)=>{//get request 
    res.status(200);
    res.json(products);
})
app.post("/products",(req,res)=>{
    const {title,price,quantity} = req.body;//now make these in objects
    if(!title || !price || !quantity) {
        res.status(400).json({message:"bad request"});
    }
    const newid = products.length>0?products[products.length-1].id+1:1001
    const newproducts  = {newid,title,price,quantity};
    products.push(newproducts);

    res.status(201).json({
        message:"created successfully"
    })
})
app.get("/products/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    res.json(product)
})
app.listen(PORT,(err)=>{
    try{
      if(err) throw err;
      else console.log(`server is running on port ${PORT}`);
    }catch(err) {
        console.log("server error",err.message);
    }
})