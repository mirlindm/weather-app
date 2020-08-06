const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=585fe9c36b0563d8091a7e0840ef32db&query=58.3727,26.7238'

// Get the information in Fahrenheit Unit instead of Celsius
//const url_fahrenheit = 'http://api.weatherstack.com/current?access_key=585fe9c36b0563d8091a7e0840ef32db&query=37.8267,-122.4233&units=f'

// Function to make the HTPP Request to get the temperature of Tartu, Estonia (or any other city) by providing the latitude and longitude of the city
// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error) {
//         console.log('Unable to find location!')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })


geocode('Tetovo', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})