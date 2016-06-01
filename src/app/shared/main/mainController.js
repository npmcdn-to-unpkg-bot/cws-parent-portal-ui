angular.module('cws').controller('mainController', ['$scope','AuthService',function($scope,AuthService){
    var vm = this;
    vm.username = AuthService.username();

    vm.user = {
        name: 'John Doo',
        image: 'https://dl.dropboxusercontent.com/u/99892820/female-users/women29-photo-by-Nathan-O\'Nions.jpg'
    };

}]);

