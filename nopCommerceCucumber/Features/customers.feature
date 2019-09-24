Feature: Customers

Scenario: Add new customer

    Given user is in login page
    When title of login page is "Your store. Login"
    And user enters email "admin@yourstore.com" and password "admin"
    And user clicks on login button
    Then user can view Dashboard
    When user clicks on customers menu
    And clicks on customers menu item
    And click on add new customer page
    Then user can view and add new customer
    When user enters customer info
    Then clicks on save button
    Then user can view confirmation message "The new customer has been added successfully."
    And close browser
    