/// <reference types="Cypress" />

describe('CssLocators', () => {

  it('csslocators', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(4000)
    cy.get("input[name='username']").type("Admin")
    
    cy.get("input[name='password']").type("admin123")
  
    cy.wait(4000)
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Dashboard")

    cy.get(".style_logInBtn___vSRi", { timeout: 300000 }).click();

    })


  

})