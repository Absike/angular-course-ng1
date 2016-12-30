angular.module('app')
    .directive('countDown', function(){
        return {
            scope: {
                start: '<',
                end: '&'
            },
            controller: function($scope, $interval) {
                var id = $interval(function(){
                    console.log($scope.start);
                    $scope.start--;
                    if ($scope.start == 0) {
                        $interval.cancel(id);
                        $scope.end();
                    }
                }, 1000)
            },
            templateUrl: 'directives/countdown/countdown.template.html'
        }
    })