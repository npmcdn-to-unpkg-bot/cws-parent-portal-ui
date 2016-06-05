/**
 * Created by Husamui on 5/31/16.
 */

angular.module('cws').controller('editProfileController', ['$scope','$http','User',function($scope, $http, User){

    $scope.user = User.data;


    $scope.update = function () {
        $scope.user.$update({ id: 'current' }, function() {
            console.log("Updated!");
        });
    };

    

}]);
