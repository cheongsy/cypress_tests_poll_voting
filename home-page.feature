Feature: Polls HomePage

Background: 
        Given I open Polls HomePage

    @Priority-Critical @poll @home
    Scenario: Create a poll
        And I fill out the poll form
        When I submit the poll form after some interval
        Then I verify poll form is created successfully

    @Priority-Critical @poll @home
    Scenario: Add a poll option
        And I fill out the poll form
        When I add a poll option and fill that out 
        And I submit the poll form after some interval
        Then I verify poll form is created successfully

    @Priority-Critical @poll @home
    Scenario: Add multiple poll options - 20 options
        And I fill out the poll form
        When I add multiple poll options and fill them out 
        And I submit the poll form after some interval
        Then I verify poll form is created successfully
        And I verify there are correct number of results displayed

    @Priority-Medium @poll @home
    Scenario: Submit a poll without filling out any form fields
        When I submit the poll form after some interval
        Then I verify poll form has proper validation message when form is submitted empty

    @Priority-Medium @poll @home
    Scenario: Submit a poll without filling out any options
        And I fill out the question field only
        When I submit the poll form after some interval
        Then I verify poll form throws proper error messages when there are no options entered

    @Priority-Medium @poll @home
    Scenario: Submit a poll with shorter than minimum 10 characters question title
        And I fill out the form options
        When I fill out the question field with short question title 
        And I submit the poll form after some interval
        Then I verify poll form throws proper error messages when only a short question title is entered

    @Priority-Medium @poll @home
    Scenario: View a popular poll's voting page
        When I click on a popular poll
        Then I will land on "popular poll's voting" page

    @Priority-Medium @poll @home
    Scenario: Visual Test - Poll home page snapshot should match base snapshot
        Then I compare the snapshot of the poll home page with the base snapshot and it should match
        