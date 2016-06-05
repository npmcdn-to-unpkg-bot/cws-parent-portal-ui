angular.module('cws').directive('cwsNav', ['AuthService','$state',function(AuthService,$state){
    return{
        restrict: 'AE',
        scope:{
            user: "="
        },
        replace: true,
        templateUrl: 'app/shared/nav/navView.html',
        link: function(scope, elem, attrs){
            scope.logout = function(){
                AuthService.logout();
                window.location = '/'
            };

            scope.showMsgSidebar = function () {
                $(".sidebar").toggleClass('active');
            }
            

        }
    }
}]);