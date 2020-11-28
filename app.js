const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Connect to the mongoDB client at localhost
mongoose.connect("mongodb://localhost:27017/booksDB",{useNewUrlParser:true,useUnifiedTopology: true});

// make a schema
const bookSchema = {
    _id: Number,
    title: String,
    description: String,
    author: String
};

// use the schema to make a collection
const Books = mongoose.model("Book",bookSchema);


// routes for the app
app.route("/books")

.get(function(req,res){
    Books.find(function(err,foundBook){
        if(foundBook){
            res.send(foundBook);
        }else{
            res.send("No Record Found");
        }
    });
})

.post(function(req,res){
    
    var newBook = new Books({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    });

    newBook.save(function(err){
        if(!err){
            res.send("Successfuly added to db");
        }else{
            res.send(err);
        }
    });
  
});



app.listen("3000",function(){
    console.log("Server Running at port 3000");
})