angular.module('cws').controller('loginController', ['$scope','$state','AuthService', function($scope,$state, AuthService){
    


    $scope.data = {};


    $scope.login = function(data) {
        AuthService.login(data.username, data.password).then(function(authenticated) {
            $state.go('home', {}, {reload: true});
            // $scope.setCurrentUsername(data.username);
        }, function(err) {
            alert("Wrong info");
        });
    };


}]);