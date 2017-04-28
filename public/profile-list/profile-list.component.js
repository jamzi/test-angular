angular.
  module('profileList').
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ['Profiles',
      function ProfileListController(Profiles) {
        var self = this;
        self.paginationNumbers = [];
        self.searchQuery = {
          _page: 1
        }

        self.getProfiles = function getProfiles() {
          self.profiles = Profiles.query(self.searchQuery, function (data, headers) {
            self.setPaginationNumbers(headers().link);
          });
        };

        self.setPaginationNumbers = function setPaginationNumbers(linkHeader) {
          var links = linkHeader.split("<").splice(1);

          _.each(links, function (link) {
            var items = link.split(";");

            var page = items[1].match(/rel=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/).slice(1);
            if (page[0] === 'last') {
              var page = items[0].match(/page=(\d+)/);
              var lastPageNumber = parseInt(page[1]) + 1;
              self.paginationNumbers = _.range(1, lastPageNumber);
            }
          });
        };

        self.setFilter = function setFilter(parameter, value) {
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

        self.getProfiles();
      }
    ]
  });