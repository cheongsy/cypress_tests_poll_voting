import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { poll1FormConstants } from "./platform/constants"

const poll1VotingPageUrl = "/en/ifghz/vote"
const selectors = {
    acceptCookieButton: '[id="accept-cookie"]',
    checkedCheckmarkMultiSelectListBox: 'div[class="checkmark checked"]',
    checkmarkMultiSelectListBox: 'div[class^="checkmark"]',
    checkmarkInputGroup: 'div[class="input-group"]'
}

Given(/^I open a poll voting page$/, () => {
    cy.visit(poll1VotingPageUrl)
    cy.get(selectors.acceptCookieButton).click()
    cy.wait(2000)
})

When(/^I select one poll option$/, () => {
    cy.get(selectors.checkmarkMultiSelectListBox).first().click({force: true})
})

When(/^I deselect the poll option$/, () => {
    cy.get(selectors.checkmarkMultiSelectListBox).first().click({force: true})
})

Then(/^I compare the snapshot of the poll voting page with the base snapshot and it should match$/, () => {
    cy.compareSnapshot('voting-page', 0)
})

Then(/^I can verify the number of poll 1 options$/, () => {
    cy.get(selectors.checkmarkMultiSelectListBox).then((listbox) => {
        cy.wrap(listbox.find('input')).then((inputElements) => {
            expect(inputElements).to.have.length(poll1FormConstants.numberOfPollOptions)
        })
    })
})

Then(/^I verify there are no checked options$/, () => {
    cy.get(selectors.checkmarkInputGroup).find(selectors.checkedCheckmarkMultiSelectListBox).should('have.length', 0)
})