const path = require('path');

var result = path.resolve("app.js")

result = path.dirname("app.js")

result = path.extname("app.js")

result = path.parse(__filename)

//console.log(path.dirname("C:\Users\berka\OneDrive\Masaüstü\Hardware Monitör"))
console.log(path.posix.isAbsolute("c:"));
//console.log(result)