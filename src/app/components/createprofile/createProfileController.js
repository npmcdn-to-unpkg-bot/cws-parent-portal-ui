angular.module('cws').controller('createProfileController', ['$scope','User','AuthService','$state',function($scope, User,AuthService,$state){

    $scope.user = new User.resource();
    $scope.formSubmitted = false;
    $scope.formValid = false;

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");


    function passmatch(pass, cpass){
        return pass === cpass;
    }

    function strength(pass){
        return strongRegex.test(pass);
    }

    $scope.register = function(){
        $scope.formSubmitted = true;
        if(!strength($scope.user.password)){
            $scope.passWeak = true;
            $scope.formValid = false;
            return false;

        }if(!passmatch($scope.user.password, $("#cpassword").val())){
            $scope.passNotMatch = true;
            $scope.formValid = false;
            return false;
        }
        else{
            $scope.passStrong = true;
            $scope.passMatch = true;
            $scope.formValid = true;
            $(".loading").addClass('active');
            User.resource.save($scope.user, function(data){
                console.log("user returned data is:",data);
                $(".loading").removeClass('active');
                if(data.success){
                    AuthService.storeUserCredentials(data);
                    window.location = '/';
                }
                console.log(data.success);
            });

        }

    }

}]);
