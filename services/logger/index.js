const fs = require('fs');
const path = require('path');

const logPath = path.resolve(__dirname, '../../logs');
console.log(logPath);

class Logger extends console.Console{
    constructor(config){
        super(config)
    }

    log(text){
        super.log(`Info ${new Date().toString()}: ${text}`)
    }

    error(text){
        super.error(`Error ${new Date().toString()}: ${text}`)
    }
}

module.exports = new Logger({
    stdout: fs.createWriteStream(logPath + '/info.log'),
    stderr: fs.createWriteStream(logPath + '/error.log'),
});

