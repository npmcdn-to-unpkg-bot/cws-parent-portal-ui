/**
 * Created by Husamui on 5/29/16.
 */

angular.module('cws')
    .constant('API_LINKS',window.__env)

    .constant('AUTH_EVENTS', {
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });