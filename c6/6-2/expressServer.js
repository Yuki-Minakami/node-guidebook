var express =require('express');

var app = express();

app.use((req,res,next)=>{
    throw new Error("Met error");
    next();
});
app.use((req,res,next)=>{
    console.log("Middle B");
    next();
});
app.use((req,res,next)=>{
    console.log("Middle C");
    next();
});
app.use((req,res,next)=>{
    console.log("Middle C");
    next();
});
app.use((err,req,res,next)=>{
    console.log("Middle C");
    next();
});

app.listen(3000);