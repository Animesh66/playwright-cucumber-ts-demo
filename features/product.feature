@regression @ui
Feature: Product discovery
  Scenario: Open product details from shop
    Given I open the demo application
    When I navigate to the "Shop" page
    And I open product details for "Premium Wireless Headphones"
    Then I should see product details for "Premium Wireless Headphones"
