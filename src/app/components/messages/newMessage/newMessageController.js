/**
 * Created by Husamui on 6/1/16.
 */
angular.module('cws').controller('newMessageController', ['$scope','User','Conversation','$state','toastr',function($scope,User,Conversation,$state,toastr){
    $scope.conversation = new Conversation.resource();


    $('.selectpicker').selectpicker();

    $scope.newConversation = function(){
        console.debug($scope.conversation);
        $(".loading").addClass('active');
        console.log($scope.conversation.receiver);
        if($scope.conversation.receiver == undefined){
            // alert("this field it's required");
            toastr.error('Please select a receiver', 'Error');

            $(".loading").removeClass('active');
            return false;
        }else{
            Conversation.resource.save($scope.conversation, function(data){
                if(data.success){
                    $scope.conversation = new Conversation.resource();
                    $state.go('messages.inbox', {}, {reload: true});
                    $(".loading").removeClass('active');

                }

            });
        }
        console.debug(conversation);
    }




}]);
