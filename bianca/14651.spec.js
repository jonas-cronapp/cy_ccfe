describe("Bug#14651", () => {

    it("A div está responsiva?", () => {

        cy.viewport(1366,768);
        cy.visit(Cypress.env("nucleo"));


        cy.get("li:nth-child(1) .perfil-icon").click()
        cy.wait(3000)
        cy.get("input[ng-model='perfil.login']").type(Cypress.env("loginnucleo"))
        cy.get("input[ng-model='perfil.senha']").type(Cypress.env("senhanucleo"))
        cy.get("button[ng-click='validarLogin(perfil)']").click();

       cy.wait(3000)
       cy.get("li:nth-child(6)").first().click()
       cy.get("tr.ng-scope > td:nth-child(5)").last().then(($unidade) =>{


        cy.wrap($unidade).should("have.css","width").and("match",/137px/)
       })

       

    })

})