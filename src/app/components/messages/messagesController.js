(function() {
    'use strict';
angular.module('cws').controller('messagesController', ['$scope','User',function($scope,User){

    User.data.$promise.then(function(data){
        $scope.user =  data;

    });

    $(".sidebar").click(function(){
        $(".sidebar").removeClass('active');
    })
}]);
}());
