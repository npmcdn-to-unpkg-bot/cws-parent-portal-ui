/**
 * Created by Husamui on 6/1/16.
 */
angular.module('cws').controller('sentController', ['$scope','Conversation',function($scope,Conversation){


    $scope.conversations = Conversation.resource.query({select:'sender'});
}]);
