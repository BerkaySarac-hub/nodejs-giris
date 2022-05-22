const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/plain");
//     res.statusCode = 231;
//     res.statusMessage = "Ok Oldu";

//     res.end("status code 231 ve mesaj da Ok Oldu")
// })
const server = http.createServer((req, res) => {
    fs.readFile("indexx.html", function(error, file) {
        if (error) {
            res.setHeader("Content-Type", "text/html")
            res.statusCode = 404
            res.statusMessage = "Bir hata meydana geldi ve dosyayı bulamadık"
            res.write("dosya bulunamadı")
            res.end("Dosya  bulunamadı")
        } else {
            res.setHeader("Content-Type", "text/html")
            res.statusCode = 200
            res.statusMessage = "OK"
            res.end(file)
        }
    })

})

server.listen(3000);