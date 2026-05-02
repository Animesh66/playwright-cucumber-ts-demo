@api @smoke
Feature: Product API
  Scenario: Get all products from API
    When I request all products from the API
    Then the API response status should be 200
    And the API response should contain products
