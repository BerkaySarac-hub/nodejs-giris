const fs = require('fs');

const files = fs.readdir('./', function(error, data) { //! Dosya konumunda ki bileşenleri okuma 
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

const data = fs.readFile("index.html", "utf8", function(error, data) { //* Dosya içeriği okuma
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
});

const createdFile = fs.writeFile("deneme.txt", "merhaba ben file system module tarafından oluşturuldum", function(error) {
    if (error) { //! EĞER ERROR NULL DEĞİL İSE / ERROR PARAMETRESİ DOLDURULDUYSA
        console.log(error)
    } else {
        console.log("DOSYA BAŞARIYLA OLUŞTURULDU")
    }
})

const updateFile = fs.appendFile("deneme.txt", "... Ve şu anda güncellendim", function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log("DOSYA GÜNCELLENDİ")
    }
})

const deleteFile = fs.unlink("deneme.txt", function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log("DOSYA SİLİNDİ...")
    }
})

const renameFile = fs.rename("deneme.txt", "ismim-degisti", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Dosyanın ismi değiştirildi")
    }
})