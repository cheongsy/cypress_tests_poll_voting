export interface HomePageScreen {
    addAPollOptionAndFillOut(): void
    addMultiplePollOptionsAndFillOut(): void
    clickOnPopularPoll(): void
    comparePollHomeSnapshotWithBaseSnapshot(): void
    fillOutPollForm(): void
    fillOutFormOptions(): void
    fillOutQuestionField(): void
    fillOutQuestionFieldWithShortQuestion(): void
    isCorrectNumberOfResultsDisplayed(): void
    isErrorMessagesThrownForEmptyOptions(): void
    isErrorMessagesThrownForShortQuestion(): void
    isPollFormCreatedSuccessfully(): void
    isPollFormHasFieldValidationForEmptyQuestionField(): void
    navigateToHomePage(): void
}

//TODO: PollResultsScreen interface
//TODO: PollVotingScreen interface

export interface PollPortal {
    addAPollOptionAndFillOut(): void
    addMultiplePollOptionsAndFillOut(): void
    clickOnPopularPoll(): void
    comparePollHomeSnapshotWithBaseSnapshot(): void
    fillOutPollForm(): void
    fillOutFormOptions(): void
    fillOutQuestionField(): void
    fillOutQuestionFieldWithShortQuestion(): void
    isCorrectNumberOfResultsDisplayed(): void
    isErrorMessagesThrownForEmptyOptions(): void
    isErrorMessagesThrownForShortQuestion(): void
    isPollFormCreatedSuccessfully(): void
    isPollFormHasFieldValidationForEmptyQuestionField(): void
    navigateToHomePage(): void
}