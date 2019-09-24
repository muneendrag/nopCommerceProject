Feature: Login Feature
  
  Scenario: nopCommerce Login
    Given user is in login page
    When title of login page is "Your store. Login"
    And user enters email "admin@yourstore.com" and password "admin"
    And user clicks on login button
    Then user on home page
    And title of homepage is "Dashboard / nopCommerce administration"
    Then user click on logout link
    And Close browser
    
  Scenario Outline: Login DataDriven
    
 		Given user is in login page
    When title of login page is "Your store. Login"
    And user enters email "<email>" and password "<password>"
    And user clicks on login button
    Then user on home page
    And title of homepage is "Dashboard / nopCommerce administration"
    Then user click on logout link
    And Close browser
    
    Examples: 
        | email | password |
        | admin@yourstore.com | admin |
        | aadmins@yourstore.com | admin@123 |
        | aaadmins123@yourstore.com | aadmin@123 |
        
        