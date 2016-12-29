function DateController($scope, DateService) {
    $scope.now = DateService.now();
}

angular.module('controllers', [])
    .controller('DateController', DateController);