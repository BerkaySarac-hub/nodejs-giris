const { error } = require('console');
const fs = require('fs');
const http = require('http');
var docVals;
let createdHtmlDoc = fs.readFile("./created.html", "utf8", (error, data) => {
    if (error) {
        console.log(error)
    }
    if (data) {
        docVals += data
    }
})

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': "text/html;, charset-utf-8" });
        res.write(docVals)
        res.end();
    }
}).listen(3000, (error) => {
    console.log("server 3000 portu üzerinde çalışıyor")
    if (error) {
        console.log("bir error oluştu" + " " + error)
    }
})