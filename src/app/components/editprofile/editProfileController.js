/**
 * Created by Husamui on 5/31/16.
 */
(function() {
    'use strict';
angular.module('cws').controller('editProfileController', ['$scope','$http','User','USStates', 'USStateLookups','toastr',function($scope, $http, User,USStates, USStateLookups,toastr){

    $scope.USStates = USStates;
    $scope.USStateLookups = USStateLookups;

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
                $scope.user.address.zip = Number(update.user.address.zip);
                $("#cnpassword").val("");
            }else{
                toastr.error(update.message, 'Error');
            }
        });
    };

    

}]);
}());