

describe('handling iframes', () => {


    it.skip('Approach 1/ iframe 1', () => {

        cy.visit("https://ui.vision/demo/webtest/frames/")

        let iframe = cy.get("frame[src='frame_1.html']")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        cy.wait(5000)
        iframe.find("input[name='mytext1']").type("Shivam")


    })





    it.skip("iframe 2", () => {

        cy.visit("https://ui.vision/demo/webtest/frames/")

        // cy.wait(5000)
        let iframe = cy.get("frame[src='frame_2.html']")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        cy.wait(5000)
        iframe.find("input[name='mytext2']").type("WWe")
        // iframe.find("").click()


    })


    it.skip("iframe 3", () => {

        cy.visit("https://ui.vision/demo/webtest/frames/")

        // cy.wait(5000)
        let iframe = cy.get("frame[src='frame_3.html']")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        cy.wait(5000)
        iframe.find("input[name='mytext3']").type("WWe")
        // iframe.find("").click()


    })


    it.skip('Approach 2/By creating custom command', () => {

        cy.visit("https://ui.vision/demo/webtest/frames/")

        cy.getIframeBody("frame[src='frame_3.html']")
            .find("input[name='mytext3']")
            .type('Your text here');


    })


    it.skip("Approach 3", () => {

        cy.visit("https://ui.vision/demo/webtest/frames/")

        cy.frameLoaded("frame[src='frame_4.html']")

        cy.iframe("frame[src='frame_4.html']").find("input[name='mytext4']").should('be.visible').type("wwe")



    })


    it("Nested iframes", () => {

        cy.visit("https://ui.vision/demo/webtest/frames/")


        cy.getIframeBody("frame[src='frame_3.html']")      // Access the outer iframe
            .find("iframe[src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")               // Locate the nested iframe
        .then((innerIframe) => {
                cy.wrap(innerIframe.contents().find('body'))
                    .should('not.be.empty')
                    .within(() => {
                        // Interact with elements inside the inner iframe
                        cy.get("label[for='i8'] span[class='aDTYNe snByac OvPDhc OIC90c']").click();
                    });
            });

    })


})