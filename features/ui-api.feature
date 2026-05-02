@regression @api @ui
Feature: UI and API combined checks
  Scenario: Verify API product appears in the UI
    When I request all products from the API
    And I open the demo application
    And I navigate to the "Shop" page
    Then the shop page should show the first API product
