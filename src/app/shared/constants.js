/**
 * Created by Husamui on 5/29/16.
 */

angular.module('cws')
    .constant('API_LINKS', {
        // baseurl: 'http://localhost:3000/api/'
        baseurl: 'http://ec2-54-193-28-144.us-west-1.compute.amazonaws.com/api'
    })
    
    .constant('AUTH_EVENTS', {
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });