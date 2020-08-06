const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Calling the geocode function defined in the Utils/geocode  
geocode('Tartu', (error, data) => {
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

