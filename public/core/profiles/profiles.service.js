angular.
  module('core.profiles').
  factory('Profiles', ['$resource',
    function($resource) {
      return $resource('http://localhost:3000/profiles/:profileId', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);