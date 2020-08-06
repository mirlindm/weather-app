const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=585fe9c36b0563d8091a7e0840ef32db&query=37.8267,-122.4233'
//const url_fahrenheit = 'http://api.weatherstack.com/current?access_key=585fe9c36b0563d8091a7e0840ef32db&query=37.8267,-122.4233&units=f'

// Function to make the HTPP Request
request({url: url, json: true}, (error, response) => {
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
})

// Geocoding service
const url_coordinates = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWlybGluZG11cmF0aSIsImEiOiJja2RpcGkxMmswNzV2MnRtcnp2Z2d1YnY5In0.NIEFhdqHrBf8A_rdnRxC4g&limit=1'

// Function to make the HTTP Request to the API in order to extract the coordinates of Los Angeles
request({url: url_coordinates, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('The latitude of Los Angeles is: ' + latitude + ', and the longitude of LA is: ' + longitude)

})