var app = angular.module('cws', ['ui.router']);

app.controller('cwsMainCtrl', ['$scope','AUTH_EVENTS','$state', function ($scope,AUTH_EVENTS,$state) {

    $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
        console.log("You are not allowed to access this resource.");
        alert("You are not allowed to access this resource.");
    });

    
}]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('/messages', '/messages/inbox');

    $stateProvider
        .state('main',{
            templateUrl: 'app/shared/main/main.html',
            abstract:true,
            controller: 'mainController',
            controllerAs: 'mainvm'
        })
        .state('logging',{
            templateUrl: 'app/components/logging/logging.html',
            abstract:true,
            controller: 'loggingController'
        })
        .state('logging.login',{
            templateUrl: 'app/components/logging/login/login.html',
            url: '/login',
            parent:'logging',
            controller: 'loginController',
            authenticate: false
        })
        .state('logging.forgotpass',{
            templateUrl: 'app/components/logging/forgotpass/forgotpass.html',
            url: '/forgot-password',
            parent:'logging',
            controller: 'forgotPassController',
            authenticate: false

        })
        .state('createprofile',{
            templateUrl: 'app/components/createprofile/createProfile.html',
            url: '/create-profile',
            controller: 'createProfileController',
            authenticate: false
        })
        .state('messages',{
            parent:'main',
            url:'/messages',
            templateUrl:'app/components/messages/messagesView.html',
            controller:'messagesController',
            authenticate: true
        })
        .state('editprofile',{
            // parent:'main',
            url:'/profile',
            templateUrl:'app/components/editprofile/editProfile.html',
            controller:'editProfileController',
            authenticate: true
        })
        .state('messages.inbox',{
            parent:'messages',
            url:'/inbox',
            templateUrl:'app/components/messages/inbox/inbox.html',
            controller:'inboxController',
            authenticate: true
        })
        .state('messages.sent',{
            parent:'messages',
            url:'/sent',
            templateUrl:'app/components/messages/sent/sent.html',
            controller:'sentController',
            authenticate: true
        })
        .state('messages.newmessage',{
            parent:'messages',
            url:'/new-message',
            templateUrl:'app/components/messages/newMessage/newMessage.html',
            controller:'newMessageController',
            authenticate: true
        })
        .state('messages.single',{
            parent:'messages',
            url:'/:id',
            templateUrl:'app/components/messages/single/singleMessage.html',
            controller:'singleMessageController',
            authenticate: true
        })
        .state('fosterAgency',{
            parent:'main',
            url:'/foster-agency',
            templateUrl:'app/components/fosterAgency/fosterAgency.html',
            controller: 'fosterAgencyController',
            authenticate: true
        })
        .state('fosterAgency.single',{
            parent:'fosterAgency',
            url:'/foster-agency/:id',
            templateUrl:'app/components/fosterAgency/singleAgency.html',
            controller: 'singleAgencyController',
            authenticate: true
        });

    // $urlRouterProvider.otherwise('/home');
    $urlRouterProvider.otherwise(function($injector, $location){
        var $state = $injector.get("$state");
        $state.go('messages.inbox');
    });
}]);