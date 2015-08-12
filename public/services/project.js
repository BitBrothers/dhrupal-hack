angular.module('MangloreHack')
  .factory('Project', function($resource) {
    return $resource('/api/event/:eslug/team/:tslug/project', null,
    {
        'update': { method:'PUT' }
    });
  });
