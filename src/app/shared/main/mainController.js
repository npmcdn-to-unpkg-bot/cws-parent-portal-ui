(function() {
    'use strict';
angular.module('cws').controller('mainController', ['$scope','AuthService','User',function($scope,AuthService,User){


    User.data.$promise.then(function(data){
        if(data.success){
            $scope.user = data.user;
        }else{
            console.log("Failed to load the user resources");
        }
        $(".loading").removeClass('active');
    });


}]);

}());