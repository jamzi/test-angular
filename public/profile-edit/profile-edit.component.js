angular.
  module('profileEdit').
  component('profileEdit', {
    templateUrl: 'profile-edit/profile-edit.template.html',
    controller: ['Profiles', '$routeParams', '$location',
      function ProfileEditController(Profiles, $routeParams, $location) {
        var self = this;

        self.profile = Profiles.get({ profileId: $routeParams.profileId });

        self.selectProfileThumbnail = function selectProfileThumbnail(thumbnailImage) { 
          self.profile.thumbnail.file = thumbnailImage.path;
        };

        self.saveProfile = function saveProfile() {
          self.profile.$update(function() {
            $location.path('/profiles');
          });
        };
      }
    ]
  });