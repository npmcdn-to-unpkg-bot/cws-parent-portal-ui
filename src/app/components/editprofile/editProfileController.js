/**
 * Created by Husamui on 5/31/16.
 */

angular.module('cws').controller('editProfileController', ['$scope','$http','User','AuthService',function($scope, $http, User,AuthService){

    $scope.user = User.data;

    $scope.update = function () {
        $scope.user.$update({ id: AuthService.userId }, function() {
            console.log("Updated!");
        });
    };

    

}]);
