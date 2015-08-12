angular.module('MangloreHack')
  .factory('Teams', function($resource) {
    return $resource('/api/event/:eslug/teams');
  });
