angular.module('cws').controller('mainController', ['$scope','AuthService',function($scope,AuthService){
    $scope.username = AuthService.username();

}]);

