const http = require('http');

const server5  = http.createServer((req,res) =>{
    res.end('Welcome to Local Server 5555...');
}); // Server Create

server5.listen(5555,() =>{
    console.log('Server Start at Port 5555');
});