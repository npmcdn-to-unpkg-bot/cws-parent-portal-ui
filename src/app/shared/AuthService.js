angular.module('cws')

    .service('AuthService', ['$rootScope','$q','$http','API_LINKS', function($rootScope, $q, $http, API_LINKS) {
        var LOCAL_TOKEN_KEY = 'CWS-Key';
        var username = '';
        var isAuthenticated = false;
        var authToken;

        function loadUserCredentials() {
            var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
            if (token) {
                useCredentials(token);
            }
        }
        function setCurrentUsername(user){
            username = user;
        }

        function storeUserCredentials(token) {
            window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
            useCredentials(token);
        }

        function useCredentials(token) {
            isAuthenticated = true;
            authToken = token;

            // Set the token as header for requests!
            $http.defaults.headers.common['X-Auth-Token'] = token;
        }

        function destroyUserCredentials() {
            authToken = undefined;
            username = '';
            isAuthenticated = false;
            $http.defaults.headers.common['X-Auth-Token'] = undefined;
            window.localStorage.removeItem(LOCAL_TOKEN_KEY);
        }


        var logout = function() {
            destroyUserCredentials();

        };

        loadUserCredentials();

        return {
            storeUserCredentials: storeUserCredentials,
            setCurrentUsername: setCurrentUsername,
            logout: logout,
            isAuthenticated: function() {return isAuthenticated;},
            username: function() {return username;}

        };
    }])

    .factory('AuthInterceptor', ['$rootScope','$q','AUTH_EVENTS',function ($rootScope, $q, AUTH_EVENTS) {
        return {
            responseError: function (response) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                    403: AUTH_EVENTS.notAuthorized
                }[response.status], response);
                return $q.reject(response);
            }
        };
    }])

    .config(['$httpProvider',function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }]);