const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'obtiene ciudad',
        demand: true
    }
}).argv;

module.exports = {
    argv
}