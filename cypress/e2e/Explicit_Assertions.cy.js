

describe('Explicit_Assertions', ()=>{

it('', ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()

            let expName='xyz'
        cy.get(".oxd-userdropdown-name").then(  (x)=>{

            let actName=x.text()



            //BDD Style
            // expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)


            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        })
        
})

})