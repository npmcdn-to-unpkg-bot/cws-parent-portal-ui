angular.module('cws').controller('messagesController', ['$scope','User',function($scope,User){

    $scope.user = User.data;

    $(".sidebar").click(function(){
        $(".sidebar").removeClass('active');
    })
}]);
