angular.module('app', ["services", "controllers", "ngRoute"])
    .config(function (WeatherServiceProvider) {
        WeatherServiceProvider.setApiKey('202810a72254672fbd30f09b73f93939');
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/weather', {
                'controller': 'WeatherController',
                'templateUrl': 'partials/weather.template.html'
            })
            .when('/settings', {
                'controller': 'SettingsController',
                'templateUrl': 'partials/settings.template.html'
            })            
            .otherwise('/weather')
    })    