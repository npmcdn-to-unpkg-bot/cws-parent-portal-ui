angular.module('cws')

    .run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
        $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
            if (next.authenticate && !AuthService.isAuthenticated()){
                // User isn’t authenticated
                event.preventDefault();
                // $state.go("logging.login");
                $state.go('logging.login', {}, {reload: true});
                // $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                console.log("Not authenticated");
            }else if(!next.authenticate && AuthService.isAuthenticated()){
                event.preventDefault();
                $state.go('home', {}, {reload: true});
                console.log("authenticated");

            }





        });
    });
