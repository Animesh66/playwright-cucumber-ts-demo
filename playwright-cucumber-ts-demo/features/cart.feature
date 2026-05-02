@regression @ui
Feature: Shopping cart
  Scenario: Add a product to the cart from a data table
    Given I open the demo application
    When I add the following product to the cart
      | productName                   | quantity |
      | Premium Wireless Headphones   | 1        |
    Then my cart should contain "Premium Wireless Headphones"
