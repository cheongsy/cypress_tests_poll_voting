import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { popularPoll1Constants } from '../platform/constants'

const selectors = {
    submitButton: '[class="btn blue"][type="submit"]'
}

When(/^I submit the poll form after some interval$/, () => {
	cy.wait(6000)
	cy.get(selectors.submitButton).click()
})

When(/^I submit the poll form$/, () => {
	cy.get(selectors.submitButton).click()
})

Then(/^I will land on "(.*)" page$/, (page: string) => {
    let expectedUrl
    switch(page) {
        case 'home':
            expectedUrl = Cypress.config('baseUrl')
            break
		case 'popular poll\'s voting': 
			expectedUrl = popularPoll1Constants.url
			break
        default:
            throw new Error(`"${expectedUrl}" url is not defined.`)
    }

    cy.url().should('eq', expectedUrl)
})