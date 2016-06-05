angular.module('cws').controller('mainController', ['$scope','AuthService','User',function($scope,AuthService, User){
    var vm = this;


    vm.user = User.data;
    
   

}]);

