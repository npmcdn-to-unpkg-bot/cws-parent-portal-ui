/**
 * Created by Husamui on 5/31/16.
 */



angular.module('cws').controller('createProfileController', ['$scope','User','AuthService','$state',function($scope, User,AuthService,$state){

    $scope.user = new User.resource();
    // $scope.user = {};

    $scope.register = function(){
        $(".loading").addClass('active');
        User.resource.save($scope.user, function(data){

            $(".loading").removeClass('active');
            if(data.success){
                AuthService.storeUserCredentials(data.token);
                window.location = '/';
            }
            console.log(data.success);
        })
    }

}]);
