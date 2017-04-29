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

        self.setFilter = function setFilter(parameter, value) {
          self.searchQuery._page = 1;
          //is_enabled
          if (parameter === 'is_enabled' || parameter === 'is_disabled') {
            if (parameter === 'is_enabled' && value === true) {
              self.searchQuery.is_enabled = true;
            }
            else if (parameter === 'is_disabled' && value === true) {
              self.searchQuery.is_enabled = false;
            }
            else {
              delete self.searchQuery.is_enabled;
            }
          }

          //is_visible
          if (parameter === 'is_visible' || parameter === 'is_hidden') {
            if (parameter === 'is_visible' && value === true) {
              self.searchQuery.is_visible = true;
            }
            else if (parameter === 'is_hidden' && value === true) {
              self.searchQuery.is_visible = false;
            }
            else {
              delete self.searchQuery.is_visible;
            }
          }

          //search
          if (parameter === 'search') {
            if (parameter === 'search' && value != '') {
              self.searchQuery.q = value;
            }
            else {
              delete self.searchQuery.q;
            }
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