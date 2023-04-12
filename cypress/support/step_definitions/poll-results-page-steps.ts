import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { homePageConstants, resultsPageConstants, votingPageConstants } from "./platform/constants"

const poll1ResultsPageUrl = "/en/ifghz"
const selectors = {
    acceptCookieButton: '[id="accept-cookie"]',
    checkmarkMultiSelectListBox: 'div[class="checkmark"]',
    percentageResults: '[class="pourcentage"]',
    pollResults: 'li[class="result"]'
}

Given(/^I open a poll results page$/, () => {
    cy.visit(poll1ResultsPageUrl)
    cy.get(selectors.acceptCookieButton).click()
    cy.wait(2000)
})

Given(/^I open a poll results page only$/, () => {
    cy.visit(poll1ResultsPageUrl)
})

When(/^I click on Vote$/, () => {
    cy.contains(resultsPageConstants.vote).click()
})

When(/^I click on View Poll Results$/, () => {
    cy.contains(votingPageConstants.viewResults).click()
})

When(/^I click on Back$/, () => {
    cy.contains(votingPageConstants.back).click()
})

Then(/^I compare the snapshot of the poll results page with the base snapshot and it should match$/, () => {
    cy.compareSnapshot('results-page', 0)
})

Then(/^I can view the poll results$/, () => {
    cy.contains(resultsPageConstants.vote).should('be.visible')
    cy.get(selectors.pollResults).should('be.visible')
    cy.get(selectors.checkmarkMultiSelectListBox).should('not.exist')
    cy.contains('%').should('be.visible')
})

Then(/^I can view the poll creation form$/, () => {
    cy.contains(homePageConstants.createThisPoll).should('be.visible')
})

Then(/^I should see no change in the poll results$/, () => {
    cy.get(selectors.percentageResults)
    .should('be.visible')
    .then((elements) => {
        cy.wrap(elements)            
        .should('have.length', 3)
        .each((ele) => {
            cy.wrap(ele)
            .invoke('text')
            .should('eq', '0%')
        })
    })
})

Then(/^I can view the poll questions$/, () => {
    cy.get(selectors.checkmarkMultiSelectListBox).should('be.visible')
})