const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]

if(!address) {
    console.log('Please provide an address')
} else {

    // Calling the geocode function defined in the Utils/geocode  
    geocode(address, (error, data) => {
        if(error){
        return console.log(error)
        }

    // Calling the forecast function defined in the Utils/geocode  
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
      
        })
    })
}
