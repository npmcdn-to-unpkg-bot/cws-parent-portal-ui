angular.module('cws').directive('cwsNav', function() {
    return{
        restrict: 'AE',
        scope:{
            user: "="
        },
        replace: true,
        templateUrl: 'app/shared/nav/navView.html',
        link: function(scope, elem, attrs){





        }
    }
});