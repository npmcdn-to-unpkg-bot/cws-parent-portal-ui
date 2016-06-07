/**
 * Created by Husamui on 5/31/16.
 */

angular.module('cws').controller('editProfileController', ['$scope','$http','User',function($scope, $http, User){
    $scope.user = {};
    User.data.$promise.then(function(data){
        $scope.user = data;
        $scope.user.address.zip = Number(data.address.zip);

    });

    $scope.update = function () {
        User.resource.update({ id:'me' }, $scope.user);
    };

    

}]);
