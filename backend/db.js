// getting-started.js
const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI='mongodb+srv://goFood:goFood@cluster0.zcfghvs.mongodb.net/gofoodmern?retryWrites=true&w=majority';
main().catch(err => console.log(err));
mongoose.set('strictQuery', false);
async function main() {
    try{
        await mongoose.connect(mongoURI);
        console.log("connected");
        const FoodItem = mongoose.model('FoodItem',{}, 'food_items');
        const FoodCategory=mongoose.model('FoodCategory',{},'foodCategory');
         // 'food_items' is your collection name
        try{
            const fetched_data=await FoodItem.find({});
            const foodCategoryData=await FoodCategory.find({});
            global.food_items=fetched_data;
            global.food_category=foodCategoryData;
        }
        catch(e){
            console.log(e);
        }
       
    }
    catch(e){
        console.log(e);
    }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports=main;
