//The code below is a sample of how to use the Weather API in Node.js.
//The code is provided by WeatherAPI.com and can be found at https://github.com/weatherapicom/javascript
var WeatherApi = require('weather_api');

var defaultClient = WeatherApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['key'] = "Token"

var api = new WeatherApi.APIsApi()

var q = "q_example"; // {String} Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var dt = new Date("2013-10-20"); // {Date} Date on or after 1st Jan, 2015 in yyyy-MM-dd format


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.astronomy(q, dt, callback);
