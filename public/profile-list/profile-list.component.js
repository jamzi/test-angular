angular.
  module('profileList').
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ['Profiles',
      function ProfileListController(Profiles) {
        var self = this;
        var pageNumber = 1;

        self.getProfiles = function getProfiles(pageNumber) {
          self.profiles = Profiles.query({ _page: pageNumber }, function (data, headers) {
            self.pageNumber = pageNumber;
          });
        };

        self.getProfiles(pageNumber);
      }
    ]
  });