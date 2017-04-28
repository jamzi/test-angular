angular.
  module('profileList').
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ['Profiles',
      function ProfileListController(Profiles) {
        var self = this;

        var pageNumber = 1;
        self.paginationNumbers = [];

        self.getProfiles = function getProfiles(pageNumber) {
          self.profiles = Profiles.query({ _page: pageNumber }, function (data, headers) {
            self.pageNumber = pageNumber;
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

        self.getProfiles(pageNumber);
      }
    ]
  });