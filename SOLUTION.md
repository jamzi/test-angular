SOLUTION
========

Estimation
----------
Estimated: 8,5 hours

- Project Setup (NPM, Bower, First run) - 0,5h
- 5 Gherkin tests, testing out API - 0,5h
- Project structure setup, routing setup - 1h
- Factory setup for HTTP calls ($resource) - 0,5h
- Calling factory from controller with query params for pagination - 0,5h
- Calculate last page number by parsing link response header - 1h
- Setup pagination number buttons under profile list - 0,5h
- Filter parameters as an searchQuery object - 0,5h
- Filter implementation (conditions) - 1h
- Click profile row, passing id to profile edit, populating model - 0,5h
- Request based on profile id, adding update method, updating resource, updating thumbnail - 1h
- Refactoring: removed lodash, simplified pagination - 0,5h
- Refactoring: simpler filtering - 0,5h

Spent: 7,25 hours

- Project Setup (NPM, Bower, First run) - 0,5h
- 5 Gherkin tests, testing out API - 0,5h
- Project structure setup, routing setup - 0,5h
- Factory setup for HTTP calls ($resource) - 0,25h
- Calling $resource from controller with query params for pagination - 0,5h
- Calculate last page number by parsing link response header - 0,5h
- Setup pagination number buttons under profile list - 0,5h
- Filter parameters as an searchQuery object - 0,5h
- Filter implementation (conditions) - 1h
- Click profile row, passing id to profile edit, populating model - 0,5h
- Request based on profile id, adding update method, updating resource, updating thumbnail - 0,5h
- Refactoring: removed lodash, simplified pagination - 0,5h
- Refactoring: simpler filtering - 1h

Solution
--------
I could improve the app by:
- Enabling sorting on table header items (Profile, Sub title, Country) - 3h
- Improved the filter functionallity (some weird edge cases when both Enabled Yes and No are selected) - 4h
- Improved the UX by removing flickering when selecting properties in filter - 3h
- Added more fields to edit in the ProfileEdit page - 4h