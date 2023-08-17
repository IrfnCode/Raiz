var app = require('express')();
const { exec } = require("child_process");
const port = 4000
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require("path");
const fs = require("fs")
const express = require("express");

const filehtmlnya = path.join(__dirname, "");

app.use(express.static(filehtmlnya));


//app.get('/', function(req, res){ res.sendFile('/data/data/com.termux/files/home/storage/chat/index.html');  });

//Whenever someone connects this gets executed
io.on('connection', function(socket){
   //console.log('A user connected');
   
  
      //kirim data ke client
      socket.on('pesan', function(data){
      if(data){
    exec(data.toString(), (error, stdout, stderr) => {
    socket.emit('dariserver2', { text: data.toString()});
    if (error) {
      //console.log(error)
      socket.emit('dariserver', { text: `${error.toString().replace(/\n/g,"<br>")}` });}
    if (stderr) {return;}
    if(stdout){
//console.log(stdout.replace(/\n/g,"<br>"))
      socket.emit('dariserver', { text: `${stdout.replace(/\n/g,"<br>")}`});
    } })
     }})
     //terima data dari Client
      socket.on('pesan', function(data){
      console.log(data.toString())})
      socket.on('pesanupload', function(dataupload){
      fs.writeFileSync("./"+dataupload.nama.slice(12),dataupload.file)
      console.log(dataupload.nama.toString().slice(12))})
      
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      //console.log('A user disconnected');
   });
});
http.listen(port, function(){
   console.log(`Server Berjalan di Port: ${port}`);
});