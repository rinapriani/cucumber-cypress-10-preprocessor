#cypress/e2e/feature/register-invesnow.feature

Feature: Add passport in register form

Scenario: Register invesnow account
    Given I open register page
    When I enter email address "emailAddress"
    Then I enter number phone "number"
    Then I enter password "password"
    Then I enter confirmation password "confirmation_password"
    Then I click register button
    Then I generate otp code