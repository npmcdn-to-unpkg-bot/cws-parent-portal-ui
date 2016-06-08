/**
 * Created by Husamui on 6/1/16.
 */
(function() {
    'use strict';
angular.module('cws').controller('singleMessageController', ['$scope','$stateParams','Conversation','Message','User',function($scope, $stateParams,Conversation,Message,User){

    var messagesWrapper = $(".messages-wrapper");

    $scope.conversation = Conversation.resource.get({id: $stateParams.id}, function(){
        if(User.data.id != $scope.conversation.sender.id){
            $scope.replymessage.receiver = $scope.conversation.sender.id;
        }

    });

    function scrollToBottom(){
        messagesWrapper.animate({ scrollTop: messagesWrapper.height() }, "slow");

    }
    scrollToBottom();

    $('[data-toggle="popover"]').popover();


    $scope.replymessage = new Message.resource();
    $scope.replymessage.conversation_id = $stateParams.id;


    $scope.reply = function(){
        Message.resource.save($scope.replymessage, function(res){
           if(res.success){
               res.message.sender = User.data;
               $scope.conversation.messages.push(res.message);
               scrollToBottom();
               $scope.replymessage.content = "";
           }
        });
    };


    $scope.print = function(){
        window.print();
    }


    

}]);
}());