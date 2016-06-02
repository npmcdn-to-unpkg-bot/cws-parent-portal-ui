/**
 * Created by Husamui on 6/1/16.
 */
angular.module('cws').controller('singleMessageController', ['$scope','$stateParams',function($scope, $stateParams){

    $scope.id = $stateParams.id;

    // var message =
    $scope.mail = {
        id: 1,
        subject: 'Hello World',
        messages: [

            {
                author: 'Jane Doo',
                author_image: 'url',
                data_created: '01/02/2016',
                content: 'This is all the message content'
            },

            {
                author: 'Husam',
                author_image: 'url',
                data_created: '01/02/2016',
                content: 'This is all the message content 2'
            }
        ]
    };
    

}]);
