function WeatherServiceProvider() {
    // Private fields with default values
    var apiKey = null;

    // Exposed method to configuration phase
    this.setApiKey = function (_apiKey) {
        apiKey = _apiKey;
    }

    // Our service
    this.$get = function ($http) {
        var units = 'metric';
        function get(city) {
            return $http({
                url: 'http://api.openweathermap.org/data/2.5/weather',
                params: {
                    q: city,
                    APPID: apiKey,
                    units: units
                }
            });
        }
        function setUnits(_units) {
            units = _units;
        }
        return {
            get: get,
            setUnits: setUnits
        }
    }
}

angular.module('services', [])
    .provider('WeatherService', WeatherServiceProvider);