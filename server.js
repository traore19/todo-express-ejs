const express = require('express');
const bodyParser = require('body-parser');

const app =express();

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"))

let items =["item1","item2"];

app.get('/',(req,res)=>{

    const today = new Date();
    
    let options = { 
        weekday: 'long', 
       year: 'numeric',  
        month: 'long', 
        day: 'numeric' };

    let day = today.toLocaleDateString('en-Us',options)
    
    
    res.render("list", {kindOfDay : day,newListItems : items});

});

app.post('/',(req,res)=>{
    var item = req.body.newItem;

    items.push(item);
    // console.log(item)
    res.redirect('/');

})



app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
