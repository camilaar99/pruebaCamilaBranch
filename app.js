const express=require('express');
const app= express();
const path=require('path');


app.listen(3030,()=> console.log("Servidor levantado en el puerto 3030 https://localhost:3030"))

app.get('/login.html',(req,res)=>{
    let ruta=path.resolve(__dirname, './views/login.html')
    res.sendFile(ruta)
})

app.get('/signin.html',(req,res)=>{
    let ruta=path.resolve(__dirname, './views/signin.html')
    res.sendFile(ruta)
})

app.use(express.static('public'))