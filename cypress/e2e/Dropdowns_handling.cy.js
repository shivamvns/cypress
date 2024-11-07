

describe('handle dropdowns', ()=>{

    // it('dropdown with select', ()=>{

    //     cy.visit("https://www.zoho.com/commerce/free-demo.html")


    //     cy.xpath("//select[@id='zcf_address_country']").select("Japan").should("have.value", "Japan")
    // })


    // it('dropdown without select', ()=>{

    //     cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")


    //     cy.xpath("//span[@id='select2-billing_country-container']").click()

    //     cy.xpath("//input[@class='select2-search__field']").type("Libya").type("{enter}")

    //     cy.xpath("//span[@id='select2-billing_country-container']").should('have.text', 'Libyaa')
    // })


    // it("dropdown with autosuggestions", ()=>{

    //     cy.visit("https://www.wikipedia.org/")

    //     cy.get("input#searchInput").type("Delhi")

    //     cy.get("h3.suggestion-title").contains("Delhi").click()

    // })



    it("dynamic dropdown", ()=>{

        cy.visit("https://www.google.com/")

        cy.xpath("//button[text()='M6CB1c rr4y5c']").click()


        cy.get(".gLFyf").type("cypress automation")

        cy.get(".wM6W7d>span").each(($el, index, $list )=>{

            if($el.text()=='cypress automation example')
            {
                cy.wrap($el).click()
            }

        })

        cy.get("#APjFqb").should('have.value', 'cypress automation example')
    })



})