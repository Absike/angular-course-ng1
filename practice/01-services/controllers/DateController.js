function DateController($scope, DateService) {
    $scope.displayDate = function() {
        $scope.now = DateService.now($scope.format);
    }
    $scope.displayDate(); // On first load, $scope.format is undefined
}

angular.module('controllers', [])
    .controller('DateController', DateController);