const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/BooksDB",{useNewUrlParser:true,useUnifiedTopology: true});

const bookSchema = {
    _id: Number,
    title: String,
    description: String,
    author: String
};

const Books = mongoose.model("Book",bookSchema);

app.route("/bookStore")




app.listen("3000",function(){
    console.log("Server Running at port 3000");
})