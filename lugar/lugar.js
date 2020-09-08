const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const ciudad = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=1dda78e4197924b1ffa54cd7c15b24be&query=${ciudad}`
    });

    /*
    const instance = axios.create(
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: {'X-RapidAPI-Key': '2063868581msh79b530e3e468a63p169e0ajsn62f792fef88b'
    }) 
    */

    const resp = await instance.get();

    if (!resp.data.request) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const { location } = resp.data;
    const lugar = location.name;
    const { lat } = location;
    const { lon } = location;

    return {
        lugar,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon
}