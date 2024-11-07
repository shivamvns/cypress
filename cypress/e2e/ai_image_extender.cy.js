describe("Image Extender", () => {
    it("Test Case 1", () => {
        
          cy.visit("https://www.phot.ai/");
          cy.wait(5000);
          cy.xpath("//*[@id=\"__next\"]/div/header/nav/div[2]/div", { timeout: 300000 }).click();
          // cy.get(".style_logInBtn___vSRi", { timeout: 300000 }).click();
          // cy.wait("@loginButton");
          // cy.get('.MuiCardContent-root > .MuiButtonBase-root').click();
          // cy.get('.Styles_magicLinkInputField__r3ec7').type("killlmeee123@yopmail.com");
          // cy.get('.Styles_emailCon__ggeWE > .Styles_loginBtn__RMXIy').should("be.visible").click();
          // cy.wait(20000);
          // cy.get('.MagicLinkOverlay_btn__gDCYz').click();
          // cy.visit("https://appy-s.phot.ai/plan-details");
          // cy.get(".styles_changePlanlabel__ilYEK", { timeout: 10000 }).should("be.visible");
          // cy.get(".styles_usedVsTotalCredits__OE9u4", { timeout: 10000 }).then(

            // ($p) => {
            //   let index1 = $p.text().indexOf("/")
            //   const valueBeforeUse  = Number($p.text().substring(0, index1-1));
              // cy.get("#all-tools > .style_navLink__nfoJ4" ,{ timeout: 100000 })
              //   .should("be.visible")
              //   .click({ force: true });
                
              // cy.contains("AI Image Extender", { timeout: 100000 }).should("be.visible").click({ force: true });
              // cy.get('input[type="file"]').attachFile('jpgimage.jpeg');
              // cy.get('.ToolPhotoUncrop_selectRatio__9BMYa', { timeout: 100000 }).should("be.visible").click({ force: true });
              // cy.get('.ToolPhotoUncrop_dropDownList__x7x3T > :nth-child(3)', { timeout: 100000 }).should("be.visible").click({ force: true });
              // cy.get('.ToolPhotoUncrop_generate__XLL_G', { timeout: 100000 }).should("be.visible").click({ force: true });
              // cy.get('figure > img', {timeout: 500000,}).should("be.visible");
              // cy.wait(10000);
              // cy.visit("https://appy-s.phot.ai/plan-details");
              // cy.get(".styles_changePlanlabel__ilYEK", { timeout: 1000000 }).should("be.visible");

              // cy.get(".styles_usedVsTotalCredits__OE9u4").then(($valueAfterUse) => {
                
              //   let index = $valueAfterUse.text().indexOf("/")
            //     expect(valueBeforeUse+1).to.equal(Number($valueAfterUse.text().substring(0, index-1)))
            //   });
            // }
        //   );
        });
    });