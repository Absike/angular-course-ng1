function SettingsController($scope, WeatherService) {
    $scope.setUnits = function () {
        WeatherService.setUnits($scope.unit);
    }
}

angular.module('controllers', [])
    .controller('SettingsController', SettingsController);