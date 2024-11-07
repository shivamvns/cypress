/// <reference types="Cypress"/>
describe("Implicit Assertions demo"  ,()=>{

    it('URLAssertions' ,()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // one way of doing it
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain','opensource')


        // // Another way of doing it
        // cy.url().should('include','orangehrmlive.com')
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain','opensource')

        //  Another way of doing it
        cy.url().should('include','orangehrmlive.com')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain','opensource')
        .and('not.contain', 'closedsource')    //Negative Assertion


        
    })


    it('TitleAssertions' ,()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // one way of doing it
        cy.title().should('include','HRM')
        .and('eq', 'OrangeHRM')
        .and('contain', 'Orange')
        .and('not.contain', 'AppleHRM')    //Negative Assertion


        // // Another way of doing it
        // cy.title().should('include','orangehrmlive.com')
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain','opensource')

        //  Another way of doing it
        // cy.title().should('include','orangehrmlive.com')
        // .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .and('contain','opensource')


        
    })

  


    it('LogoAssertions' ,()=>{

        cy.wait(5000)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // one way of doing it
        cy.xpath("//img[@alt='company-branding']").should('be.visible')
        .and('exist')
       


        
    })

    it('total number of links', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                // cy.wait(5000)
        
                // cy.get(".style_logInBtn___vSRi").click();
                cy.xpath("//a").should('have.length','5')
             
        
        
        
            })

})