const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=585fe9c36b0563d8091a7e0840ef32db&query=37.8267,-122.4233'

// Function to make the HTPP Request
request({url: url}, (error, response) => {
    console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current)
})
