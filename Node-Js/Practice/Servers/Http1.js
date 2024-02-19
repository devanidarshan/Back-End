const http = require('http');

const server1  = http.createServer((req,res) =>{
    res.end('Welcome to Local Server 1111...');
}); // Server Create

server1.listen(1111,() =>{
    console.log('Server Start at Port 1111');
});