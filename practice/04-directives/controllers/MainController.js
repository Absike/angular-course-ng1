function MainController($scope) {
    $scope.start = 0;
    $scope.countDownPlease = function () {
        $scope.start = $scope.input;
    }
    $scope.endPlease = function () {
        alert('Fin du compte à rebours');
    }
}

angular.module('app')
    .controller('MainController', MainController);