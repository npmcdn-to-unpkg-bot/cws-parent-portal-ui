/**
 * Created by Husamui on 6/1/16.
 */
(function() {
    'use strict';
angular.module('cws').controller('singleMessageController', ['$scope','$stateParams','Conversation','Message','User',function($scope, $stateParams,Conversation,Message,User){

    var messagesWrapper = $(".messages-wrapper");

    Conversation.resource.get({id: $stateParams.id}, function(data){
        $scope.conversation = data.conversation;
        console.log(data);
        if(User.data.id != $scope.conversation.sender.id){

            // So the user can't reply on their messages.
            var textarea = $("#replyMsgInput");
            textarea.attr('disabled','disabled');
            textarea.attr('placeholder','waiting for response');
            $(".reply-btns input").attr('disabled','disabled');
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
               res.message.sender = User.data.user;
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