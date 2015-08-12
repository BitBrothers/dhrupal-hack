angular.module('MangloreHack')
  .factory('Apply', function($resource) {
    return $resource('/api/event/:eslug/team/:tslug/apply', null,
    {
        'update': { method:'PUT' }
    });
  });


angular.module('MangloreHack')
  .factory('Approve', function($resource) {
    return $resource('/api/event/:eslug/team/:tslug/approval', null,
    {
        'update': { method:'PUT' }
    });
  });

angular.module('MangloreHack')
  .factory('Invite', function($resource) {
    return $resource('/api/event/:eslug/team/:tslug/invite', null,
    {
        'update': { method:'PUT' }
    });
  });

angular.module('MangloreHack')
  .factory('Accept', function($resource) {
    return $resource('/api/event/:eslug/team/:tslug/accept', null,
    {
        'update': { method:'PUT' }
    });
  });

angular.module('MangloreHack')
  .factory('Unjoin', function($resource) {
    return $resource('/api/event/:eslug/team/:tslug/unjoin', null,
    {
        'update': { method:'PUT' }
    });
  });

angular.module('MangloreHack')
  .factory('Remove', function($resource) {
    return $resource('/api/event/:eslug/team/:tslug/remove', null,
    {
        'update': { method:'PUT' }
    });
  });
