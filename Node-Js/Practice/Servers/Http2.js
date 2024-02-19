const http = require('http');

const server2  = http.createServer((req,res) =>{
    res.end('Welcome to Local Server 2222...');
}); // Server Create

server2.listen(2222,() =>{
    console.log('Server Start at Port 2222');
});