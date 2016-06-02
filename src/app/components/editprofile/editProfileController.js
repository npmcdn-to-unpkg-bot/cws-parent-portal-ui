/**
 * Created by Husamui on 5/31/16.
 */

angular.module('cws').controller('editProfileController', ['$scope','$http',function($scope, $http){

    $scope.user = {};

    // $scope.user = {
    //     first_name: "John",
    //     last_name: "Doe",
    //     image: "https://dl.dropboxusercontent.com/u/99892820/female-users/women29-photo-by-Nathan-O'Nions.jpg",
    //     address: {
    //         name: 'Mike Gedo',
    //         street_address: '2110 K St',
    //         street_address2: 'Suite 2',
    //         state:'CA',
    //         city: 'Sacramento',
    //         zip: '95825'
    //     },
    //     login: {
    //         email: 'husam28@gmail.com'
    //     }
    //
    // };

    $http.get('data/user.json').then(function(res){
        $scope.user = res.data;
        console.log(res);
    });







    

}]);
