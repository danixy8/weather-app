const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLugarLatLon(argv.ciudad)
    .then(console.log)
    .catch(console.log);

    clima.getClima(40.714, -74.006)
    .then(console.log)
    .catch(console.log);
    */
    
const getInfo = async(direccion) => {

    try{
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.lugar} es de ${temp}.`
    }catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`

    }
    
}

getInfo(argv.ciudad)
    .then( console.log )
    .catch( console.log );