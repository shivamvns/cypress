
describe('Checking UI Elements', () => {

    // it("Checking Radio button", () => {

    //     cy.visit("https://testautomationpractice.blogspot.com/")

    //     //Visibility of Radio buttons
    //     // cy.get("input#male").should('be.visible')
    //     // cy.get("input#female").should('be.visible')


    //     //selecting radio buttons
    //     // cy.get("input#male").check().should('be.checked')
    //     // cy.get("input#female").check().should('be.checked')
    //     // cy.get("input#male").should('not.be.checked')








    // })


    it("Checking check boxes", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")




        //selecting checkboxes 
        // cy.get("input#male").check().should('be.checked')
        // cy.get("input#monday").check().should('be.checked')
        // cy.get("input#sunday").should('not.be.checked')


        //selecting all the checkbox
        // cy.xpath("//div[@class='form-check form-check-inline']//input[@type='checkbox']").check().should('be.checked')

        //unselecting all the checkbox
        // cy.xpath("//div[@class='form-check form-check-inline']//input[@type='checkbox']").uncheck().should('not.be.checked')


     //selecting first checkbox
     cy.xpath("//div[@class='form-check form-check-inline']//input[@type='checkbox']").first().check().should('be.checked')


      //selecting last checkbox
     cy.xpath("//div[@class='form-check form-check-inline']//input[@type='checkbox']").last().check().should('be.checked')
    })

})