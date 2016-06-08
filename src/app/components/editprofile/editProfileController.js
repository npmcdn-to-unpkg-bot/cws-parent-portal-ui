/**
 * Created by Husamui on 5/31/16.
 */
(function() {
    'use strict';
angular.module('cws').controller('editProfileController', ['$scope','$http','User','USStates','toastr',function($scope, $http, User,USStates,toastr){

    $scope.USStates = USStates;

    // console.log(USStates[0]);

    User.data.$promise.then(function(data){
        if(data.success){
            $scope.user = data.user;
            $scope.user.address.zip = Number(data.user.address.zip);
        }else{
            console.log("Failed to load the user resources");
        }
    });


    $scope.update = function () {
        var update = User.resource.update({ id:'me' }, $scope.user, function(){
            if(update.success){
                toastr.success('Your profile updated!', 'Success');
                $scope.user = update.user;
                $("#cnpassword").val("");
            }else{
                toastr.error(update.message, 'Error');
            }
        });
    };

    

}]);
}());