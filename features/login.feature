@smoke @ui
Feature: Login
  Scenario: Invalid login shows an error
    Given I am on the login page
    When I login with email "wrong@example.com" and password "wrong-password"
    Then I should see login error "Invalid credentials"
