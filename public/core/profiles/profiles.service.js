angular.
  module('core.profiles').
  factory('Profiles', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/profiles/:profileId', { profileId: '@id'}, {
        query: {
          method: 'GET',
          isArray: true
        },
        update: { 
          method: 'PUT'
        }
      });
    }
  ]);