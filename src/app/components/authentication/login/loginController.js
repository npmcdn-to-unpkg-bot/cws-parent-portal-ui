angular.module('cws').controller('loginController', ['$scope','$state','User', function($scope,$state, User){
    


    $scope.data = {};
    


    $scope.login = function(data) {
        User.login(data.username, data.password).then(function(authenticated) {
            $state.go('messages.inbox', {}, {reload: true});
        }, function(err) {
            alert("Wrong info");
        });
    };





}]);