 const express = require('express');
const socket =require('socket.io');


const app =express()
const sio = socket()


app.use(express.static('public-html'))

sio.on('connection',(sioo) =>{
 console.log('we have ', sioo.id);
 sioo.on(messege,(data) =>{
    sioo.socket.emit('newmass' ,data)
 })

})


 app.listen(3000);