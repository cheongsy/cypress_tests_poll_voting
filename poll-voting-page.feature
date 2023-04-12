Feature: Poll Voting Page

    @Priority-Critical @poll @vote
    Scenario: Vote on a poll
        Given I open Polls HomePage
        And I fill out the poll form
        And I submit the poll form after some interval
        And I verify poll form is created successfully
        
        When I click on Vote
        And I select one poll option
        And I submit the poll form after some interval
        Then I can view the poll results

    @Priority-Critical @poll @vote
    Scenario: View poll questions
        When I open a poll voting page
        Then I can view the poll questions
        And I can verify the number of poll 1 options

    @Priority-Medium @poll @vote
    Scenario: Able to deselect poll option after clicking again
        Given I open a poll voting page
        And I can view the poll questions
        And I select one poll option
        When I deselect the poll option
        Then I verify there are no checked options

    @Priority-Medium @poll @vote
    Scenario: Submit poll without selecting any option will not change poll results
        Given I open a poll voting page
        And I can view the poll questions
        When I submit the poll form
        Then I will land on "home" page

        When I open a poll results page only
        Then I should see no change in the poll results

     @Priority-Medium @poll @vote
    Scenario: Visual Test - Poll voting page snapshot should match base snapshot
        When I open a poll voting page
        Then I compare the snapshot of the poll voting page with the base snapshot and it should match

    