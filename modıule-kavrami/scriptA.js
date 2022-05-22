//Browser

//IIFE
(function() {
    var firstName = "Berkay"
    return {
        firstName
    }
})()
//PRİVATE MEMBERS
var age = 30
    //PUBLİC MEMBERS
var firstName = "berkay"
var log = function(name) { console.log(name) }

module.exports.name = firstName
module.exports.log = log

//! BİR DİĞER EXPORT KULLANIMI
//? module.exports{
//? name: firstName,
//? log = log
//}
//node