const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("url / karakteri içeriyor")
        res.end();
    }
    if (req.url === '/api/products') {
        res.write("Products list")
        res.end();
    }
});

// server.on("connection", () => {
//     console.log("Connection Established..")
//     console.log(req)

// })
server.listen(3000);
console.log("Listenin port 3000");