angular.module('cws').controller('loggingController', ['$scope','$rootScope','AUTH_EVENTS',function($scope,$rootScope,AUTH_EVENTS){

    $rootScope.logpage = true;

    $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
        console.log("You are not allowed to access this resource.");
        alert("You are not allowed to access this resource.");
    });

    $('.flexslider').flexslider({
        animation: "slide"
    });
}]);