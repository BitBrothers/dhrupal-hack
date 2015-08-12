angular.module('MangloreHack')
  .controller('SignupCtrl', function($scope, Auth) {
    $scope.signup = function() {
      Auth.signup({
        name: $scope.displayName,
        email: $scope.email,
        phone: $scope.phone,
        password: $scope.password
      });
    };
    $scope.pageClass = 'fadeZoom'
  });