@regression @ui
Feature: Authentication
  Scenario Outline: Register form validation
    Given I am on the register page
    When I submit registration with name "<name>", email "<email>", password "<password>", confirm password "<confirmPassword>", gender "<gender>" and date of birth "<dateOfBirth>"
    Then I should see registration feedback "<message>"

    Examples:
      | name      | email                  | password | confirmPassword | gender | dateOfBirth | message                         |
      | Test User | bad-user@example.com   | secret1  | different       | male   | 1990-01-01  | Passwords do not match          |
      | Test User | short-user@example.com | 123      | 123             | male   | 1990-01-01  | Password must be at least 6     |
