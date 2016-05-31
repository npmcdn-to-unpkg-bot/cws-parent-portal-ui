var app = angular.module('cws', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider','USER_ROLES',function($stateProvider, $urlRouterProvider,USER_ROLES){

    $stateProvider
        .state('main',{
            templateUrl: 'app/shared/main/main.html',
            abstract:true,
            controller: 'mainController'
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
        .state('home',{
            parent:'main',
            url:'/home',
            templateUrl:'app/components/home/homeView.html',
            controller:'homeController',
            authenticate: true
        })
        .state('work',{
            parent:'main',
            url:'/work',
            templateUrl:'app/components/work/workView.html',
            controller: 'workController',
            authenticate: true
        });

    $urlRouterProvider.otherwise('/home');
}]);