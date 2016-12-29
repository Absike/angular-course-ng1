angular.module('app', ["services", "controllers"])
    .config(function (WeatherServiceProvider) {
        WeatherServiceProvider.setApiKey('202810a72254672fbd30f09b73f93939');
    })