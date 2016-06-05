/**
 * Created by Husamui on 6/1/16.
 */
angular.module('cws').controller('newMessageController', ['$scope','User','Conversation','$state',function($scope,User,Conversation,$state){
    $scope.conversation = new Conversation.resource();




    $scope.newConversation = function(){
        console.debug($scope.conversation);
        $(".loading").addClass('active');
        Conversation.resource.save($scope.conversation, function(data){
            if(data.success){
                $scope.conversation = new Conversation.resource();
                $state.go('messages.inbox', {}, {reload: true});
                $(".loading").removeClass('active');

            }

        });
        // console.debug(conversation);
    }




}]);
