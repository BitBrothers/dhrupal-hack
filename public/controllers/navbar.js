angular.module('MangloreHack')
  .controller('NavbarCtrl', function($scope,$rootScope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  });