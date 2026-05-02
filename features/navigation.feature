@smoke @ui
Feature: Navigation
  Scenario: Visitor navigates to the shop page
    Given I open the demo application
    When I navigate to the "Shop" page
    Then the page URL should contain "/shop"
