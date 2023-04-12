import { HomePageScreen } from "../../types/interfaces"
import { pollFormInfo, popularPoll1Constants, pollFormErrorMessages, resultsPageConstants } from "./constants"

export default function HomePageScreen(): HomePageScreen {
    const pollsHomePageUrl = '/'
    const selectors = {
        acceptCookieButton: '[id="accept-cookie"]',
        option1TextInput: '[id="option_1"]',
        otherOptionTextInput: '[class="poll-input"][name="option_{INDEX}"]',
        pollOptionButton: '[id="add-options"]',
        pollQuestionTextInput: '[id="poll-question"]',
        resultList: 'li[class="result"]'
    }

    function navigateToHomePage(): void {
        cy.visit(pollsHomePageUrl)
        cy.get(selectors.acceptCookieButton).click()
        cy.wait(2000)
    }

    function fillOutPollForm(): void {
        cy.get(selectors.pollQuestionTextInput).type(pollFormInfo.pollQuestion)
        cy.get(selectors.option1TextInput).type(pollFormInfo.option1Answer)
        cy.get(selectors.otherOptionTextInput.replace('{INDEX}', '2')).type(pollFormInfo.option2Answer)
    }

    function fillOutFormOptions(): void {
        cy.get(selectors.option1TextInput).type(pollFormInfo.option1Answer)
        cy.get(selectors.otherOptionTextInput.replace('{INDEX}', '2')).type(pollFormInfo.option2Answer)
    }

    function fillOutQuestionField(): void {
        cy.get(selectors.pollQuestionTextInput).type(pollFormInfo.pollQuestion)
    }

    function fillOutQuestionFieldWithShortQuestion(): void {
        cy.get(selectors.pollQuestionTextInput).type(pollFormInfo.shortPollQuestion)
    }

    function clickOnPopularPoll(): void {
        cy.contains(popularPoll1Constants.questionTitle)
        .contains(popularPoll1Constants.view)
        .click()
    }

    function addAPollOptionAndFillOut(): void {
        cy.get(selectors.pollOptionButton).click()
        cy.get(selectors.otherOptionTextInput.replace('{INDEX}', '4'))
            .should('be.visible')
            .type(pollFormInfo.option4Answer)
    }

    function addMultiplePollOptionsAndFillOut(): void {
        for(let i=1; i <=20; i++) {
            cy.get(selectors.pollOptionButton).click()
            cy.get(selectors.otherOptionTextInput.replace('{INDEX}', (i+3).toString())).type(`${pollFormInfo.otherOptionAnswer} ${(i+3)}`)
        }
    }

    function comparePollHomeSnapshotWithBaseSnapshot(): void {
        //Giving a 0.3 failure threshold as home page popular poll which are getting highlighted might differ
        cy.compareSnapshot('home-page', 0.3)
    }

        function isCorrectNumberOfResultsDisplayed(): void {
        cy.get(selectors.resultList).should('have.length', 22)
    }

    function isPollFormCreatedSuccessfully(): void {
        cy.contains(resultsPageConstants.vote).should('be.visible')
    }

    function isPollFormHasFieldValidationForEmptyQuestionField(): void {
        cy.contains(resultsPageConstants.vote).should('not.exist')
	    cy.get(selectors.pollQuestionTextInput)
		.invoke('prop', 'validationMessage')
		.should('equal', pollFormErrorMessages.pleaseFillOutThisFieldError)
    }

    function isErrorMessagesThrownForEmptyOptions(): void {
        cy.contains(resultsPageConstants.vote).should('not.exist')
        cy.contains(pollFormErrorMessages.mustEnterAtLeast2OptionsError)
    }

    function isErrorMessagesThrownForShortQuestion(): void {
        cy.contains(pollFormErrorMessages.questionLengthShouldBe10Character)
    }

    return {
        addAPollOptionAndFillOut,
        addMultiplePollOptionsAndFillOut,
        clickOnPopularPoll,
        comparePollHomeSnapshotWithBaseSnapshot,
        fillOutPollForm,
        fillOutFormOptions,
        fillOutQuestionField,
        fillOutQuestionFieldWithShortQuestion,
        isCorrectNumberOfResultsDisplayed,
        isErrorMessagesThrownForEmptyOptions,
        isErrorMessagesThrownForShortQuestion,
        isPollFormCreatedSuccessfully,
        isPollFormHasFieldValidationForEmptyQuestionField,
        navigateToHomePage
    }
}