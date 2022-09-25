#cypress/e2e/features/zero.feature

Feature: Search keyword in this website and input pay bills data

Scenario: Search keyword dan login from this website
    Given I open website zero bank
    When I search zero
    Then I login this webiste

Scenario: Input pay bills bank
    Given I open pay bills menu
    When I input pay bills
    Then I Submit pay bills