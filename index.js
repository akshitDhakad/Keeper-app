const express = require('express');
const app = express();
const  ejs = require('ejs');
const path = require('path');
app.set('view engine', 'ejs');
// app.use(express.urlencoded());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

var data = [{title:"dsa",content:"data structure and algrothims sever running It's easy and algrothims"}]

app.get('/',function(req,res){
    
    res.render('home',{data:data})

})

app.post('/',function(req,res){
    console.log(req.body.newTitle)
    console.log(req.body.newContent)
    
    data.push({title:req.body.newTitle,content:req.body.newContent})
    res.render('home',{data:data})
})


app.listen(3000,function(){
    console.log('sever running on port 3000');
})


