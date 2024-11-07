describe("Ai image genertater text to image", () => {
    it("single credit checking", () => {
        cy.intercept(
            "GET",
            "https://ai-image-editor-wasabi-bucket.apyhi.com/pattern-generator/assets/related-prompts.json").as("loginButton");
            // allows testers to intercept and control HTTP requests and responses between an application and external services.
          cy.visit("https://www.phot.ai/");
            //  visit a specified URL, which then allows you to interact with elements on the page.
          cy.get('.style_rightContent__uQuEh',{ timeout: 300000 }).click();
            //  clicks on signup button.
          cy.wait("@loginButton");
          // 
          cy.get('.Styles_magicLinkInputField__r3ec7').type("killlmeee123@yopmail.com");
          // typing mail in textbox.
          cy.get('.Styles_emailCon__ggeWE > .Styles_loginBtn__RMXIy').should("be.visible").click();
          // clicking to get magic link to mail
          cy.wait(20000);
          cy.get('.MagicLinkOverlay_btn__gDCYz').click();
          // once mail approved here need to click on continue
          cy.visit("https://www.phot.ai/plan-details");
          // going to  dashboard to check the credits, doing assertion on credits to check  limit and  how much we used the limit.
          cy.get(".styles_changePlanlabel__ilYEK", { timeout: 10000 }).should("be.visible");
          cy.get(".styles_usedVsTotalCredits__OE9u4", { timeout: 10000 }).then(
            ($p) => {
              let index1 = $p.text().indexOf("/")
              const valueBeforeUse  = Number($p.text().substring(0, index1-1));
              cy.get("#all-tools > .style_navLink__nfoJ4" ,{ timeout: 100000 })
                .should("be.visible")
                .click({ force: true });
                // clicking on tools. 
              cy.contains("Text to Art", { timeout: 100000 }).should("be.visible").click({ force: true });
              // selecting text to art portion.
              cy.contains("AI Image Generator", { timeout: 100000 }).should("be.visible").click({ force: true });
              // in that test to art portion we are selecting ai image generator.
              cy.get(".style_generateArtLeftCon__UyD0H > .style_leftGenerateBtnCon__a_Uw1 > .style_generateBtn__IQuFD", { timeout: 100000 }).should("be.visible").click({ force: true });
              cy.get("#myTextarea", { timeout: 100000 }).should("be.visible").type("Tiger");
              // typing the prompt in the text area.
              cy.get('.styles_countContainer__JNtfs > .ml-0', { timeout: 100000}).should("be.visible").click();
              // selecting how many outputs we want, based on outputs the credits will decrease.
              cy.get(".styles_generateBtn__tm3d0", { timeout: 1000000 }).should("be.visible").click();
              // clicked to generate the output.
              cy.contains("Text to art results", {timeout: 500000,}).should("be.visible");
              cy.wait(10000);
              //waiting for the output..
              cy.visit("https://www.phot.ai/plan-details");
              cy.get(".styles_changePlanlabel__ilYEK", { timeout: 1000000 }).should("be.visible");
              cy.get(".styles_usedVsTotalCredits__OE9u4").then(($valueAfterUse) => {
                let index = $valueAfterUse.text().indexOf("/")
                expect(valueBeforeUse+1).to.equal(Number($valueAfterUse.text().substring(0, index-1)))
                // once the output comes, going to dashboard and doing assertion that the limits are decreasing properly or not.
              });
            }
          );
        });

    it("2 credits checking", () => {
        cy.intercept(
            "GET",
            "https://ai-image-editor-wasabi-bucket.apyhi.com/pattern-generator/assets/related-prompts.json").as("loginButton");
          cy.visit("https://www.phot.ai/");
          cy.get('.style_rightContent__uQuEh',{ timeout: 300000 }).click();
          cy.wait("@loginButton");
          cy.get('.Styles_magicLinkInputField__r3ec7').type("killlmeee123@yopmail.com");
          cy.get('.Styles_emailCon__ggeWE > .Styles_loginBtn__RMXIy').should("be.visible").click();
          cy.wait(20000);
          cy.get('.MagicLinkOverlay_btn__gDCYz').click();
          cy.visit("https://www.phot.ai/plan-details");
          cy.get(".styles_changePlanlabel__ilYEK", { timeout: 10000 }).should("be.visible");
          cy.get(".styles_usedVsTotalCredits__OE9u4", { timeout: 10000 }).then(
            ($p) => {
              let index1 = $p.text().indexOf("/")
              const valueBeforeUse  = Number($p.text().substring(0, index1-1));
              cy.get("#all-tools > .style_navLink__nfoJ4" ,{ timeout: 100000 })
                .should("be.visible")
                .click({ force: true });
              cy.contains("Text to Art", { timeout: 100000 }).should("be.visible").click({ force: true });
              cy.contains("AI Image Generator", { timeout: 100000 }).should("be.visible").click({ force: true });
              cy.get(".style_generateArtLeftCon__UyD0H > .style_leftGenerateBtnCon__a_Uw1 > .style_generateBtn__IQuFD", { timeout: 100000 }).should("be.visible").click({ force: true });
              cy.get("#myTextarea", { timeout: 100000 }).should("be.visible").type("Lion");
              cy.get('.styles_countContainer__JNtfs > .ml-0', { timeout: 100000}).should("be.visible").click();
              cy.get('.styles_countContainer__JNtfs > :nth-child(2)', { timeout: 100000}).should("be.visible").click();
              cy.get(".styles_generateBtn__tm3d0", { timeout: 1000000 }).should("be.visible").click();
              cy.contains("Text to art results", {timeout: 500000,}).should("be.visible");
              cy.wait(10000);
              cy.visit("https://www.phot.ai/plan-details");
              cy.get(".styles_changePlanlabel__ilYEK", { timeout: 1000000 }).should("be.visible");
              cy.get(".styles_usedVsTotalCredits__OE9u4").then(($valueAfterUse) => {
                let index = $valueAfterUse.text().indexOf("/")
                expect(valueBeforeUse+2).to.equal(Number($valueAfterUse.text().substring(0, index-1)))
              });
            }
          );
        });

        it("3 credits checking", () => {
            cy.intercept(
                "GET",
                "https://ai-image-editor-wasabi-bucket.apyhi.com/pattern-generator/assets/related-prompts.json").as("loginButton");
              cy.visit("https://www.phot.ai/");
              cy.get('.style_rightContent__uQuEh',{ timeout: 300000 }).click();
              cy.wait("@loginButton");
              cy.get('.MuiCardContent-root > .MuiButtonBase-root').click();
              cy.get('.Styles_magicLinkInputField__r3ec7').type("killlmeee123@yopmail.com");
              cy.get('.Styles_emailCon__ggeWE > .Styles_loginBtn__RMXIy').should("be.visible").click();
              cy.wait(20000);
              cy.get('.MagicLinkOverlay_btn__gDCYz').click();
              cy.visit("https://www.phot.ai/plan-details");
              cy.get(".styles_changePlanlabel__ilYEK", { timeout: 10000 }).should("be.visible");
              cy.get(".styles_usedVsTotalCredits__OE9u4", { timeout: 10000 }).then(
                ($p) => {
                  let index1 = $p.text().indexOf("/")
                  const valueBeforeUse  = Number($p.text().substring(0, index1-1));
                  cy.get("#all-tools > .style_navLink__nfoJ4" ,{ timeout: 100000 })
                    .should("be.visible")
                    .click({ force: true });
                  cy.contains("Text to Art", { timeout: 100000 }).should("be.visible").click({ force: true });
                  cy.contains("AI Image Generator", { timeout: 100000 }).should("be.visible").click({ force: true });
                  cy.get(".style_generateArtLeftCon__UyD0H > .style_leftGenerateBtnCon__a_Uw1 > .style_generateBtn__IQuFD", { timeout: 100000 }).should("be.visible").click({ force: true });
                  cy.get("#myTextarea", { timeout: 100000 }).should("be.visible").type("cat");
                  cy.get('.styles_countContainer__JNtfs > :nth-child(3)', { timeout: 100000}).should("be.visible").click();
                  cy.get(".styles_generateBtn__tm3d0", { timeout: 1000000 }).should("be.visible").click();
                  cy.contains("Text to art results", {timeout: 500000,}).should("be.visible");
                  cy.wait(10000);
                  cy.visit("https://www.phot.ai/plan-details");
                  cy.get(".styles_changePlanlabel__ilYEK", { timeout: 1000000 }).should("be.visible");
                  cy.get(".styles_usedVsTotalCredits__OE9u4").then(($valueAfterUse) => {
                    let index = $valueAfterUse.text().indexOf("/")
                    expect(valueBeforeUse+3).to.equal(Number($valueAfterUse.text().substring(0, index-1)))
                  });
                }
              );
            });

            it("4 credits checking", () => {
                cy.intercept(
                    "GET",
                    "https://ai-image-editor-wasabi-bucket.apyhi.com/pattern-generator/assets/related-prompts.json").as("loginButton");
                  cy.visit("https://www.phot.ai/");
                  cy.get('.style_rightContent__uQuEh',{ timeout: 300000 }).click();
                  cy.wait("@loginButton");
                  cy.get('.MuiCardContent-root > .MuiButtonBase-root').click();
                  cy.get('.Styles_magicLinkInputField__r3ec7').type("killlmeee123@yopmail.com");
                  cy.get('.Styles_emailCon__ggeWE > .Styles_loginBtn__RMXIy').should("be.visible").click();
                  cy.wait(20000);
                  cy.get('.MagicLinkOverlay_btn__gDCYz').click();
                  cy.visit("https://www.phot.ai/plan-details");
                  cy.get(".styles_changePlanlabel__ilYEK", { timeout: 10000 }).should("be.visible");
                  cy.get(".styles_usedVsTotalCredits__OE9u4", { timeout: 10000 }).then(
                    ($p) => {
                      let index1 = $p.text().indexOf("/")
                      const valueBeforeUse  = Number($p.text().substring(0, index1-1));
                      cy.get("#all-tools > .style_navLink__nfoJ4" ,{ timeout: 100000 })
                        .should("be.visible")
                        .click({ force: true });
                      cy.contains("Text to Art", { timeout: 100000 }).should("be.visible").click({ force: true });
                      cy.contains("AI Image Generator", { timeout: 100000 }).should("be.visible").click({ force: true });
                      cy.get(".style_generateArtLeftCon__UyD0H > .style_leftGenerateBtnCon__a_Uw1 > .style_generateBtn__IQuFD", { timeout: 100000 }).should("be.visible").click({ force: true });
                      cy.get("#myTextarea", { timeout: 100000 }).should("be.visible").type("dog");
                      cy.get('.styles_countContainer__JNtfs > :nth-child(4)', { timeout: 100000}).should("be.visible").click();
                      cy.get(".styles_generateBtn__tm3d0", { timeout: 1000000 }).should("be.visible").click();
                      cy.contains("Text to art results", {timeout: 500000,}).should("be.visible");
                      cy.wait(10000);
                      cy.visit("https://www.phot.ai/plan-details");
                      cy.get(".styles_changePlanlabel__ilYEK", { timeout: 1000000 }).should("be.visible");
                      cy.get(".styles_usedVsTotalCredits__OE9u4").then(($valueAfterUse) => {
                        let index = $valueAfterUse.text().indexOf("/")
                        expect(valueBeforeUse+4).to.equal(Number($valueAfterUse.text().substring(0, index-1)))
                      });
                    }
                  );
                });
    });