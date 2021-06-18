const express=require('express');
const morgan=require('morgan');
const bodyParse=require('body-parser');
const app=express();

//middleware
app.use(morgan('dev'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

//api 
app.get('/',(req,res)=>{
     res.json("amazone clone ");
});
app.post('/',(req,res)=>{
    res.json(req.body);
});
//listen port 
app.listen(9000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('server created success on 9000 port')
    }
})
