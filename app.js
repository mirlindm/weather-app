const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=585fe9c36b0563d8091a7e0840ef32db&query=58.3727,26.7238'

// Get the information in Fahrenheit Unit instead of Celsius
//const url_fahrenheit = 'http://api.weatherstack.com/current?access_key=585fe9c36b0563d8091a7e0840ef32db&query=37.8267,-122.4233&units=f'

// Function to make the HTPP Request to get the temperature of Tartu, Estonia (or any other city) by providing the latitude and longitude of the city
request({url: url, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!')
    } else if(response.body.error) {
        console.log('Unable to find location!')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
    }
})

// Geocoding service: Get the latitude and longitude of Tartu by providing the name of the city only
const url_coordinates = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Tartu.json?access_token=pk.eyJ1IjoibWlybGluZG11cmF0aSIsImEiOiJja2RpcGkxMmswNzV2MnRtcnp2Z2d1YnY5In0.NIEFhdqHrBf8A_rdnRxC4g&limit=1'

// Function to make the HTTP Request to the API in order to extract the coordinates of Los Angeles
request({url: url_coordinates, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to geocoding service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location! Try again with another location!')
    } else {
        const tartu_latitude = response.body.features[0].center[1]
        const tartu_longitude = response.body.features[0].center[0]
        console.log('The latitude of Tartu is: ' + tartu_latitude + ', and the longitude of Tartu is: ' + tartu_longitude)
    }
})