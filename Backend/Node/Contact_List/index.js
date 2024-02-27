const express=require('express'); // import the express
 
const path=require('path');  // Step2- set the path for the ejs template engine

const port=8000;

const app=express();

app.set('view engine', 'ejs');  // Step1- tell the server that view engine is ejs
app.set('views',path.join(__dirname,'views'));// step 3

//this is middle ware which is act as parser between the server router and the browser when the data is send from the browser
app.use(express.urlencoded());



//provide styling and scripting to the ejs file using middleware 
app.use(express.static('Assets'));


// create  our own middleware
// middleware1
app.use(function(req, res, next){
   console.log("middleware1 is called");
   req.name="Rajnish"; // we can manipulate the req data in the middlware
   next();
});


//middleware2

app.use(function(req, res, next){
   console.log("middleware2 is called");
   console.log("My name is from mw2",req.name);
   next();
});






app.get('/', function(req, res){
   console.log("My name is from mw2",req.name);
   return res.render('index', {
      tittle:'MY tiitle page'

   });// make the tittle dynamic
})


var contactList=[
   {
      name:"Rajnish Kumar",
      number:"6202975623",
      email:"rajnishdivakar618@gmail.com"
   },

   {
      name:"abc",
      number:"4242422",
      email:"abc@gmail.com"

   },

   {
      name:"def",
      number:"4242422",
      email:"def@gmail.com"

   }

]
app.get('/practice', function(req, res){
   return res.render('practice',{
      title:'hey This is the title',
      contact_list:contactList
   });
})

app.post('/create-contact', function(req, res){
   // return res.redirect('/practice');  it is used when we want to redirect to a url

   // contactList.push({
   //    name:req.body.name,
   //    number:req.body.phone,
   //    email:req.body.email
   // })
   contactList.push(req.body);
   return res.redirect('/practice');

})
 app.listen(port, function(err){
    if(err){ console.log('Error in runnig the server', err);}

    console.log('Yup! My Express server is runnig on port', port);
 })