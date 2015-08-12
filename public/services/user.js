angular.module('MangloreHack')
  .factory('User', function($resource, $window) {
    return $resource('/api/user/:uslug', null,
    {
        'update': { method:'PUT' }
    });
  });





