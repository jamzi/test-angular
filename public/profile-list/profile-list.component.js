angular.
  module('profileList').
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ['Profiles', '$location',
      function ProfileListController(Profiles, $location) {
        var self = this;
        self.paginationNumbers = [];
        self.searchQuery = {
          _page: 1
        }

        self.getProfiles = function getProfiles() {
          self.profiles = Profiles.query(self.searchQuery, function (data, headers) {
            self.setPaginationNumbers(headers('x-total-count'));
          });
        };

        self.setPaginationNumbers = function setPaginationNumbers(totalProfilesCount) {
          self.paginationNumbers = [];
          if (totalProfilesCount / 10 >= 1) {
            for (var i = 1; i <= Math.ceil(totalProfilesCount / 10); i++) {
              self.paginationNumbers.push(i);
            }
          }
          else {
            self.paginationNumbers.push(1);
          }
        };

        self.setFilter = function setFilter() {
          self.searchQuery._page = 1;
          
          //is_enabled
          if (self.filter.isEnabled) {
            self.searchQuery.is_enabled = true;
          }
          else if (self.filter.isDisabled) {
            self.searchQuery.is_enabled = false;
          }
          else {
            delete self.searchQuery.is_enabled;
          }

          //is_visible
          if (self.filter.isVisible) {
            self.searchQuery.is_visible = true;
          }
          else if (self.filter.isHidden) {
            self.searchQuery.is_visible = false;
          }
          else {
            delete self.searchQuery.is_visible;
          }

          //search
          if (self.filter.search != '') {
            self.searchQuery.q = self.filter.search;
          }
          else {
            delete self.searchQuery.q;
          }

          self.getProfiles();
        }

        self.goToPage = function goToPage(pageNumber) {
          self.searchQuery._page = pageNumber;
          self.getProfiles();
        }

        self.goToProfile = function goToProfile(profileId) {
          $location.path('/profiles/' + profileId);
        };

        self.getProfiles();
      }
    ]
  });