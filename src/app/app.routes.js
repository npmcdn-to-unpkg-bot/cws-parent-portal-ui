var app = angular.module('cws', ['ui.router']);

app.controller('cwsMainCtrl', ['$scope','AUTH_EVENTS','$state', function ($scope,AUTH_EVENTS,$state) {


    
}]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){

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
        .state('home',{
            parent:'main',
            url:'/home',
            templateUrl:'app/components/home/homeView.html',
            controller:'homeController',
            authenticate: true
        })
        .state('fosterAgency',{
            parent:'main',
            url:'/foster-agency',
            templateUrl:'app/components/fosterAgency/fosterAgency.html',
            controller: 'fosterAgencyController',
            authenticate: true
        });

    // $urlRouterProvider.otherwise('/home');
    $urlRouterProvider.otherwise(function($injector, $location){
        var $state = $injector.get("$state");
        $state.go('home');
    });
}]);