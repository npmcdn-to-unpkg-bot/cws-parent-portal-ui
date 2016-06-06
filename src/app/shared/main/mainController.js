angular.module('cws').controller('mainController', ['$scope','AuthService','User',function($scope,AuthService, User){


    User.data.$promise.then(function(data){
        $scope.user = data;
        $(".loading").removeClass('active');

    });


}]);

