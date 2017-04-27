TASK 1:

As a BoF editor I want to list and filter person profiles

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I filter by value (search, enabled, visible)
THEN I expect to see the filter values persisted

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I filter by some search query
THEN I expect to see queried profiles pagination list

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I search for "Masamichi" in filters sidebar
THEN I expect to see the following profiles in the profiles table:
    | Masamichi Katayama    |

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I filter by "Enabled" "Yes" in the sidebar
AND I filter by "Yahoo" search query
THEN I expect to see the following profiles in the profiles table:
    | Joe Zee       |

TASK 2:

As a BoF editor I want to edit a person's profile

WHEN I visit the homepage
THEN I expect to see a table of profiles
WHEN I click on a profile row
THEN I expect to see profile edit page
AND I expect to see user profile title in the breadcrum

