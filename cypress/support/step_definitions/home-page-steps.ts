import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { pollFormInfo, pollFormErrorMessages, resultsPageConstants, popularPoll1Constants } from "./platform/constants"
import PollPortal from "./platform/poll-portal"

const pollPortal = PollPortal()

Given(/^I open Polls HomePage$/, () => {
	pollPortal.navigateToHomePage()
})

Given(/^I fill out the poll form$/, () => {
	pollPortal.fillOutPollForm()
})

Given(/^I fill out the form options$/, () => {
	pollPortal.fillOutFormOptions()
})

When(/^I click on a popular poll$/, () => {
	pollPortal.clickOnPopularPoll()
})

When(/^I add multiple poll options and fill them out$/, () => {
	pollPortal.addMultiplePollOptionsAndFillOut()
})

When(/^I fill out the question field only$/, () => {
	pollPortal.fillOutQuestionField()
})

When(/^I fill out the question field with short question title$/, () => {
	pollPortal.fillOutQuestionFieldWithShortQuestion()
})

When(/^I add a poll option and fill that out$/, () => {
	pollPortal.addAPollOptionAndFillOut()
})

Then(/^I compare the snapshot of the poll home page with the base snapshot and it should match$/, () => {
	pollPortal.comparePollHomeSnapshotWithBaseSnapshot()
})

Then(/^I verify poll form is created successfully$/, () => {
	pollPortal.isPollFormCreatedSuccessfully()
})

Then(/^I verify there are correct number of results displayed$/, () => {
	pollPortal.isCorrectNumberOfResultsDisplayed()
})

Then(/^I verify poll form has proper validation message when form is submitted empty$/, () => {
	pollPortal.isPollFormHasFieldValidationForEmptyQuestionField()
})

Then(/^I verify poll form throws proper error messages when there are no options entered$/, () => {
	pollPortal.isErrorMessagesThrownForEmptyOptions()
})

Then(/^I verify poll form throws proper error messages when only a short question title is entered$/, () => {
	pollPortal.isErrorMessagesThrownForShortQuestion()
})