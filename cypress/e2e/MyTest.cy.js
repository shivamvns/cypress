/// <reference types="Cypress" />

describe('My First Test Case', () => {

  it('Possitive_Title_TestCase', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
  })


  it('Negative_Title_TestCase', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM11')
  })

})