Feature: login zero web

Scenario: Login with valid data
    Given I open login page
    When I submit login
    Then I should see homepage