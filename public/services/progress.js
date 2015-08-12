angular.module('MangloreHack')
  .factory('Progress', function($resource) {
    return $resource('/api/event/goa-hack/status');
  });
