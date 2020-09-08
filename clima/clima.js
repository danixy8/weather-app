const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=6743197fa4f9fb260f0429a84f3bd1ce&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}