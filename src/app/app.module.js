var app = angular.module('cws', ['ui.router','ngResource']);

    app.controller('cwsMainCtrl', ['$scope','AUTH_EVENTS', function ($scope, AUTH_EVENTS) {

        $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
            alert("You are not allowed to access this resource.");
        });

    }]);


app.run(['$rootScope','$state','AuthService','AUTH_EVENTS',function ($rootScope, $state, AuthService,AUTH_EVENTS) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            if (next.authenticate && !AuthService.isAuthenticated()){
                // User isn’t authenticated
                event.preventDefault();
                $state.go('authentication.login', {}, {reload: true});
                // $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            }else if(!next.authenticate && AuthService.isAuthenticated()){
                event.preventDefault();
                $state.go('messages.inbox', {}, {reload: true});
            }
        });
    }]);
