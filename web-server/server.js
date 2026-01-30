import http from 'http';

const requestListener = (request, response) => {

    const method = request.method;
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    if(method == 'GET') {
        response.end('GET')
    }
    if(method == 'POST') {
        response.end('POST')
    }
    if(method == 'PUT') {P

const port = 3000;
const host = 'localhost';

server.listen(port, host, ()=> {
    console.log(`server running on http://${host}:${port}`)
})