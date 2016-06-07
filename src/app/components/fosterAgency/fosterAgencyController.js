angular.module('cws').controller('fosterAgencyController', ['$scope', 'FosterAgency', 'User', function($scope, FosterAgency, User){
    User.data.$promise.then(function(data) {
        $scope.fosterAgencies = FosterAgency.query({zipcode: data.address.zip});
    });
}]);
