const http = require('http');
const fs = require('fs');
const qs = require('querystring');
http.createServer(function(req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World');
    res.setHeader("Content-Type", 'text/html')
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write(`
            <html>
            <head>
            <title>Message is here</title>
            </head>
            <body>
            <h1>Ana sayfaya geldiniz</h1>
            <form method="POST" action="/log">
                <input type="text" name="message">
                <button type="submit">Save</button>
            </form>
            </body>
            </html>
        
        `)
        return res.end();
    }
    if (url === "/log" && method === "POST") {

        //! Body parsing
        const body = [];
        fs.writeFileSync("message.txt", 'deneme');
        req.on("data", (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on("end", () => {
            const bodyParsed = Buffer.concat(body).toString();
            const message = bodyParsed.split("=")[1];
            console.log(qs.parse(bodyParsed))
            fs.appendFileSync("message.txt", message)
        })



        res.statusCode = 302
        res.setHeader("Location", '/')
        return res.end();
    }
}).listen(3000); //!Server.listen() ile aynı

console.log('Server running at http://127.0.0.1:3000/');