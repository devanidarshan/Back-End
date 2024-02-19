const http = require('http');

const server4  = http.createServer((req,res) =>{
    res.end('Welcome to Local Server 4444...');
}); // Server Create

server4.listen(4444,() =>{
    console.log('Server Start at Port 4444');
});