const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // console.log(req.url, res.method);

    let path = './views/';
    switch(req.url) {
        case '/':
            path += "index.html"
            break;
        case '/about':
            path += "about.html"
            break;
        case '/contact-me':
            path += "contact-me.html"
            break;
        default:
            path += "404.html"
            break;
    }

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    // Send and html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
});

server.listen(8000,'localhost', () => {
    console.log('Server listening on localhost:8000');
});