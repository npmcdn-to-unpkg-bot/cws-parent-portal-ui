var app = angular.module('cws', ['ui.router','ngResource']);

app.controller('cwsMainCtrl', ['$scope','AUTH_EVENTS','$state', function ($scope,AUTH_EVENTS) {

    $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
        alert("You are not allowed to access this resource.");
    });
    


}]);
