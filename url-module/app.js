const url = require('url')
const path = require('path');
var address = "http://sadikturan.com/kurslar?year=2019&mont=nisan"

let URLresult = url.parse(address, true)
console.log(URLresult)
URLresult.path
URLresult.query.year