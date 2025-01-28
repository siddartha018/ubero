const dotenv=require('dotenv')//used to load keys from the dotenv file
dotenv.config();
const cors=require('cors');//used to allow requests to backend from any domain (in production we use specific frontend domain)
const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');


connectToDb();
app.use(cors());//used as a middleware and adds headers to all the routes so they can accept requests from any domain 
app.use(express.json());//
app.use(express.urlencoded({extende:true}))
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('hello world');

})

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports=app;
