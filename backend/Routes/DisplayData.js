const express = require('express');
const router = express.Router();
//post is best option to send data to frontend
router.post('/foodData',(req,res)=>{
    try{
        res.send([global.food_items,global.food_category]);
    }
    catch(error){
        console.log(error.message);
        res.send("Server Error");
    }
})
module.exports=router;