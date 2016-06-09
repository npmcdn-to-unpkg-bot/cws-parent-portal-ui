/**
 * Created by Husamui on 6/1/16.
 */
(function() {
    'use strict';


    angular.module('cws').controller('sentController', ['$scope','Conversation',function($scope,Conversation){
        // $scope.conversations = Conversation.resource.query({select:'sender'});

        Conversation.resource.get({select:'sender'},function(data){
            $scope.conversations = data.conversations;
        });

    }]);



}());
