/**
 * Created by Husamui on 5/31/16.
 */
angular.module('cws')
    .factory('User', ['AuthService','$q','$http','API_LINKS','$resource', function(AuthService, $q, $http, API_LINKS,$resource) {
        var user = {};

        user.login = function(email, pw) {
            return $q(function(resolve, reject) {
                $http.post(API_LINKS.baseurl + 'session' ,{'email':email, 'password': pw})
                    .then(function(res, status) {
                            if (res.data.success == true){
                                AuthService.storeUserCredentials(res.data.token);
                                resolve('Login success.');
                                user.data = user.resource.get({ id: 'current' });
                            }else{
                                reject('Login Failed.');
                            }
                        },
                        function(){
                            reject('Login Failed.');
                        });
            });
        };


        user.resource = $resource(API_LINKS.baseurl+'users/:id', { id: '@id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        }, {
            stripTrailingSlashes: false
        });

        if(AuthService.isAuthenticated()){
            user.data = user.resource.get({ id: 'current' });
        }





        return user


        }]);