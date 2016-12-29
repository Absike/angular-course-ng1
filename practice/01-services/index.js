angular.module('app', ["services", "controllers"])
    .config(function (DateServiceProvider) {
        DateServiceProvider.setFormat('D/M/YYYY HH:MM:SS');
    })