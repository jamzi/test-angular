angular.
    module('BoFAdmin').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/profiles', {
                    template: '<profile-list></profile-list>'
                }).
                when('/profiles/:profileId', {
                    template: '<profile-edit></profile-edit>'
                }).
                otherwise('/profiles');
        }
    ]);
