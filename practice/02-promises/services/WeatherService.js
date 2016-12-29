function WeatherServiceProvider() {
    // Private fields with default values
    var apiKey = null;

    // Exposed method to configuration phase
    this.setApiKey = function (_apiKey) {
        apiKey = _apiKey;
    }

    // Our service
    this.$get = function ($http) {
        function get(city) {
            return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey);
        }
        return {
            get: get
        }
    }
}

angular.module('services', [])
    .provider('WeatherService', WeatherServiceProvider);