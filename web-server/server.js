import http from 'http';


const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    const { method, url } = request;

    if(url === '/') {
        if(method === 'GET') {
            return response.end('Ini adalah halaman utama');
        } else {
            return response.end(`Halaman tidak dapat diakses dengan ${method} request method`);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            return response.end('Ini adalah halaman about. Silakan gunakan POST untuk mengirim data');
        } else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                return response.end(`Halo, ${name} Ini adalah halaman about`);
            });
        } else {
            return response.end(`Halaman tidak dapat ditemukan dengan ${method} request method`);
        }
    } else {
        return response.end('Halaman tidak ditemukan');
    }
};

const server = http.createServer(requestListener);

const port = 3000;
const host = 'localhost';

    server.listen(port, host, ()=> {
        console.log(`server running on http://${host}:${port}`);
    });
