const Logger = require('./logger');
const logger = new Logger();
//* EVENT KAYIT ET
logger.on("connection", function(args) {
    console.log("BAĞLANTI KURULDU", args)
});

//? EVENT TETİKLE
// emitter.emit("connection", { id: 1, message: "bağlandım" }) //! KAYIT ETTİĞİMİZ EVENT OTOMATİK BAĞDAŞTIRILIR VE TETİKLENİR