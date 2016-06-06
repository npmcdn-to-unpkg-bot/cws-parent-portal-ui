/**
 * Created by Husamui on 5/29/16.
 */

angular.module('cws')
    .constant('API_LINKS', {
        // baseurl: 'http://localhost:3008/api/'
        // baseurl: 'http://192.168.99.100:8081/'
        baseurl: 'https://parentportal.tabordasolutions.net:8443/'
    })
    
    .constant('AUTH_EVENTS', {
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });