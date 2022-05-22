const EventEmitter = require('events');
// const emitter = new eventEmitter();
class Logger extends EventEmitter {
    log(message) {
        console.log(message)
        this.emit("connection", { id: 1, message: "bağlandım" }) //! KAYIT ETTİĞİMİZ EVENT OTOMATİK BAĞDAŞTIRILIR VE TETİKLENİR
    }
}



module.exports = Logger