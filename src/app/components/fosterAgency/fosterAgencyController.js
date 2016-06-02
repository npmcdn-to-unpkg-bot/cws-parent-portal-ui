angular.module('cws').controller('fosterAgencyController', ['$scope','$rootScope',function($scope,$rootScope){
    $scope.fosterAgencies = [
        {
            facility_name: 'FUTURO INFANTIL HISPANO',
            location_address: '1131 W. 6TH STREET, SUITE 110',
            location_city: 'ONTARIO',
            location_state: 'CA',
            location_zip: '91762',
            facility_telephone_number: '(909) 460-1138',
            facility_type: 'FOSTER FAMILY AGENCY SUB'
        },
        {
            facility_name: 'Made up One',
            location_address: '123 Street',
            location_city: 'Sac',
            location_state: 'CA',
            location_zip: '95818',
            facility_telephone_number: '(916) 460-1138',
            facility_type: 'FOSTER FAMILY AGENCY SUB'
        },
        {
            facility_name: 'Made up Two',
            location_address: '123 Avenue',
            location_city: 'Sac',
            location_state: 'CA',
            location_zip: '95818',
            facility_telephone_number: '(916) 460-1138',
            facility_type: 'FOSTER FAMILY AGENCY SUB'
        }
    ];
}]);
