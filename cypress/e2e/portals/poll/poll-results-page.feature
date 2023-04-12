Feature: Poll Results Page

Background: 
        Given I open a poll results page

    @Priority-Critical @poll @results
    Scenario: View poll results directly
        Then I can view the poll results

    @Priority-Critical @poll @results
    Scenario: View poll results from voting page
        And I can view the poll results
        And I click on Vote
        And I can view the poll questions
        When I click on View Poll Results
        Then I can view the poll results

    @Priority-Medium @poll @results
    Scenario: Visual Test - Poll results page snapshot should match base snapshot
        Then I compare the snapshot of the poll results page with the base snapshot and it should match

    @Priority-Low @poll @results
    Scenario: Clicking back from voting page
        And I can view the poll results
        When I click on Back
        Then I will land on "home" page
        And I can view the poll creation form



