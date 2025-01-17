let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
server.listen(3000);

const path = require('path'); 

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'index.html')); 
});
