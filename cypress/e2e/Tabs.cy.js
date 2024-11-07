

describe('Tabs Handling', () => {

    // it('Approach 1', ()=>{

    //     cy.visit("https://the-internet.herokuapp.com/windows")

    //     cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click();


    //     cy.get("div[class='example'] h3").should('have.text', 'New Window')

    //     cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

    //     cy.wait(6000)
    //     // cy.go('back')
    // })



    //approach 2 For the child window Domain name should be same in.
    it('Approach 2', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get("a[href='/windows/new']").then((e)=>{
            let url=e.prop('href');

            cy.visit(url)

        })


        cy.get("div[class='example'] h3").should('have.text', 'New Window')

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(6000)

        cy.go('back')


    })

})