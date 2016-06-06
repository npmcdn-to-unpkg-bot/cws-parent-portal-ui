/**
 * Created by Husamui on 6/1/16.
 */
angular.module('cws').controller('singleMessageController', ['$scope','$stateParams','Conversation','Message','User',function($scope, $stateParams,Conversation,Message,User){

    $(".loading").addClass('active');

    $scope.conversation = Conversation.resource.get({id: $stateParams.id}, function(){
        if(User.data._id != $scope.conversation.sender._id){
            $scope.replymessage.receiver = $scope.conversation.sender._id;
        }
        $(".loading").removeClass('active');

    });

    function scrollToBottom(){
        $(".messages-wrapper").animate({ scrollTop: $(".messages-wrapper").height() }, "slow");

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
    }


    

}]);
