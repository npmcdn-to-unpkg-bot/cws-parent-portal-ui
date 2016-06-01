angular.module('cws').controller('messagesController', ['$scope','$rootScope',function($scope,$rootScope){
    $(".sidebar").click(function(){
        $(".sidebar").removeClass('active');
    })
}]);
