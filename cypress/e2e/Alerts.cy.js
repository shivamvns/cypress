
describe('Alerts', () => {

    //1 Javascript Alerts: it will have some text and an 'Ok' button.



    // it.skip('JS simple Alert', () => {
    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //     cy.xpath("//button[text()='Click for JS Alert']").click()


    //     cy.on("window:alert", (t) => {
    //         expect(t).to.contains("I am a JS Alert")

    //     })


    //     cy.xpath("//p[@id='result']").should("have.text", "You successfully clicked an alert")

    //     // //Note: Alert window will automatically closed by clicking on the OK button in cypress.
    // })



    //2 Javascript Confirm Alert: it will have some text with "OK" and "Cancel" button.

    // it.skip('JS Confirmation Alert closing by default by Ok button', () => {
    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //     cy.xpath("//button[text()='Click for JS Confirm']").click()


    //     cy.on("window:confirm", (t) => {
    //         expect(t).to.contains("I am a JS Confirm")

    //     })


    //     cy.xpath("//p[@id='result']").should("have.text", "You clicked: Ok")


    // })

    //     it('JS Confirmation Alert closing by cancel button', () => {

    //         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //         cy.xpath("//button[text()='Click for JS Confirm']").click()


    //         cy.on("window:confirm", (t) => {
    //             expect(t).to.contains("I am a JS Confirm")

    //         })

    //         cy.on("window:confirm", ()=>false)

    //             cy.xpath("//p[@id='result']").should("have.text", "You clicked: Cancel")



    // })
    //3 Javascript Prompt Alert: it contain "Ok", "cancel" button and a input field too.
    //        it('JS Confirmation Alert closing by ok button', () => {

    //         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //         cy.window().then((win)=>{
    //             cy.stub(win, 'prompt').returns('welcome')
    //         })

    //         cy.xpath("//button[text()='Click for JS Prompt']").click()




    //         cy.xpath("//p[@id='result']").should('have.text', 'You entered: welcome')



    // })


    //     it('JS Confirmation Alert closing by cancel button', () => {

    //         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //         cy.window().then((win)=>{
    //             cy.stub(win, 'prompt').returns('welcome')
    //         })

    //         cy.xpath("//button[text()='Click for JS Prompt']").click()



    //         cy.on("window:prompt", ()=>false)
    //         cy.xpath("//p[@id='result']").should('have.text', 'You entered: welcome')



    // })



    // it('JS Confirmation Alert closing by cancel button', () => {

    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //     cy.window().then((win) => {

    //         // Stub the prompt and return a custom value
    //         cy.stub(win, 'prompt').callsFake((message) => {
    //             return "Welcome";  // Returning value to simulate entering "Welcome"
    //         });
    //     });

    //     // Click the button to trigger the JS Prompt
    //     cy.xpath("//button[text()='Click for JS Prompt']").click();

    //     // Assertion to verify the result after handling the prompt
    //     cy.xpath("//p[@id='result']").should('have.text', 'You entered: Null');
    // });

    //4 Authenicated Alert
    it('Authenicated Alert', () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: "admin" } })


        cy.xpath("//p[contains(text(),'Congratulations! You must have the proper credenti')]").should('have.contain', 'Congratulations!')
    })



})



