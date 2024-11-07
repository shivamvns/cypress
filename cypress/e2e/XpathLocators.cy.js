

describe('XpathLocators',()=>{
    

    it('XpathLocators',()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.xpath("//button[@type='submit']").click();

        cy.xpath("//h6[text()='Dashboard']")


    })
})