import { PollPortal } from "../../types/interfaces"
import HomePageScreen from "./home-page-screen"

export default function PollPortal(): PollPortal {
    const homePageScreen = HomePageScreen()

    function navigateToHomePage(): void {
        homePageScreen.navigateToHomePage()
    }

    function fillOutPollForm(): void {
        homePageScreen.fillOutPollForm()
    }

    function fillOutFormOptions(): void {
        homePageScreen.fillOutFormOptions()
    }

    function fillOutQuestionField(): void {
        homePageScreen.fillOutQuestionField()
    }

    function clickOnPopularPoll(): void {
        homePageScreen.clickOnPopularPoll()
    }

    function addAPollOptionAndFillOut(): void {
        homePageScreen.addAPollOptionAndFillOut()
    }

    function addMultiplePollOptionsAndFillOut(): void {
        homePageScreen.addMultiplePollOptionsAndFillOut()
    }

    function fillOutQuestionFieldWithShortQuestion(): void {
        homePageScreen.fillOutQuestionFieldWithShortQuestion()
    }

    function comparePollHomeSnapshotWithBaseSnapshot(): void {
        homePageScreen.comparePollHomeSnapshotWithBaseSnapshot()
    }

    function isCorrectNumberOfResultsDisplayed(): void {
        homePageScreen.isCorrectNumberOfResultsDisplayed()
    }

    function isPollFormCreatedSuccessfully(): void {
        homePageScreen.isPollFormCreatedSuccessfully()
    }

    function isPollFormHasFieldValidationForEmptyQuestionField(): void {
        homePageScreen.isPollFormHasFieldValidationForEmptyQuestionField()
    }

    function isErrorMessagesThrownForEmptyOptions(): void {
        homePageScreen.isErrorMessagesThrownForEmptyOptions()
    }

    function isErrorMessagesThrownForShortQuestion(): void {
        homePageScreen.isErrorMessagesThrownForShortQuestion()
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
        isErrorMessagesThrownForShortQuestion,
        isPollFormCreatedSuccessfully,
        isPollFormHasFieldValidationForEmptyQuestionField,
        isErrorMessagesThrownForEmptyOptions,
        navigateToHomePage
    }
}