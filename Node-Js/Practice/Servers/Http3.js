const http = require('http');

const server3  = http.createServer((req,res) =>{
    res.end('Welcome to Local Server 3333...');
}); // Server Create

server3.listen(3333,() =>{
    console.log('Server Start at Port 3333');
});