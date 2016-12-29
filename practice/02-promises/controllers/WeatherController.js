function WeatherController($scope, WeatherService) {
    $scope.displayWeather = function () {
        WeatherService.get($scope.city)
            .then(function (response) {
                $scope.weather = response.data.main.temp;
            })
    }
}

angular.module('controllers', [])
    .controller('WeatherController', WeatherController);