angular.module('cws').controller('mainController', ['$scope','AuthService',function($scope,AuthService){
    var vm = this;
    vm.username = AuthService.username();



    vm.user = {
        first_name: "John",
        last_name: "Doe",
        image: "https://dl.dropboxusercontent.com/u/99892820/female-users/women29-photo-by-Nathan-O'Nions.jpg",
        address: {
            name: 'Mike Gedo',
            street_address: '2110 K St',
            street_address2: 'Suite 2',
            state:'CA',
            city: 'Sacramento',
            zip: '95825'
        },
        login: {
            email: 'husam28@gmail.com'
        }

    };

}]);

