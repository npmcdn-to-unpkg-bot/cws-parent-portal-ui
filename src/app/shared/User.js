/**
 * Created by Husamui on 5/31/16.
 */
angular.module('cws')
    .service('User', ['AuthService','$q','$http','API_LINKS', function(AuthService, $q, $http, API_LINKS) {

        var login = function(email, pw) {
            return $q(function(resolve, reject) {
                $http.post(API_LINKS.baseurl + '/auth' ,{'email':email, 'password': pw})
                    .then(function(res, status) {
                            if (res.data.success == true){
                                AuthService.storeUserCredentials(res.data.token);
                                resolve('Login success.');
                            }else{
                                reject('Login Failed.');
                            }
                        },
                        function(){
                            reject('Login Failed.');
                        });

            });
        };


        return {
            login: login
        }


        }]);