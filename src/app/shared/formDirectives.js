var app = angular.module('cws');
app.directive('zip', function($q, $timeout) {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

            ctrl.$asyncValidators.zip = function(modelValue, viewValue) {

                //view -> model
                elm.on('keydown', function() {
                    // ctrl.$setViewValue(elm.html());
                    console.log(modelValue);
                });

                // model -> view
                ctrl.$render = function() {
                    elm.html(ctrl.$viewValue);
                };

                // load init value from DOM
                ctrl.$setViewValue(elm.value());
           };
        }
    };
});