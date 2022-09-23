#cypress/e2e/features/search-zero.feature

Feature: Search keyword in this website and input pay bills data

Scenario: Search keyword dan login from this website
    Given I open homepage zero bank
    When I search zero keyword
    Then I click zero pay bills
    Then I login with valid data

Scenario: Input pay bills bank
    Given I open pay bills page
    When I input pay bills bank
    Then I Submit pay bills bank