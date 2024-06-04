@login
Feature: Login test
  
@1
  Scenario: User enters the login screen and verifies the displayed elements
   
    Given user that goes to the 'login' page
    When user visualizes the login screen
    Then user validates the login elements

@2
  Scenario: User logs into MyVistage page successfully
   
    Given user that goes to the 'login' page
    When user visualizes the login screen
    And user successfully logs in as 'adminUser'