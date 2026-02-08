import http from 'http';


const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    const { method, url } = request;
    const name = 'Indra';

    if(url === '/') {

        if(method === 'GET') {
            return response.end('Ini adalah halaman utama');
        }
        return response.end(`Halaman tidak dapat diakses dengan ${method} request method`);

    } else if (url === '/about') {

        if(method === 'POST') {
            return response.end(`Halo, ${name} Ini adalah halaman about`);
        } else if (method === 'GET') {
            response.end('Ini adalah halaman about. Silakan gunakan POST untuk mengirim data');
        }
        
    }    return response.end(`Halaman tidak dapat ditemukan dengan ${method} request method`);
}

const server = http.createServer(requestListener);

const port = 3000;
const host = 'localhost';

    server.listen(port, host, ()=> {
        console.log(`server running on http://${host}:${port}`);
    });
