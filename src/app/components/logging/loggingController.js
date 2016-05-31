angular.module('cws').controller('loggingController', ['$scope','$rootScope',function($scope,$rootScope){

    $rootScope.logpage = true;

    $('.flexslider').flexslider({
        animation: "slide"
    });

}]);