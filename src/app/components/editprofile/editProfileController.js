/**
 * Created by Husamui on 5/31/16.
 */
(function() {
    'use strict';
angular.module('cws').controller('editProfileController', ['$scope','$http','User',function($scope, $http, User){
    // $scope.user = {};
    User.data.$promise.then(function(data){
        if(data.success){
            $scope.user = data.user;
            $scope.user.address.zip = Number(data.user.address.zip);
        }else{
            console.log("Failed to load the user resources");
        }
    });


    $scope.update = function () {
        User.resource.update({ id:'me' }, $scope.user);
    };

    

}]);
}());