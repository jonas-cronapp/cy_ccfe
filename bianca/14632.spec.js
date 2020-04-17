describe("Bug#14632", () => {

    it("Existe ação no título da vaga?", () => {

        cy.viewport(1366,768);
        cy.visit(Cypress.env('nucleo'));


        cy.get("li:nth-child(1) .perfil-icon").click()
        cy.wait(3000)
        cy.get("input[ng-model='perfil.login']").type(Cypress.env("loginnucleo"))
        cy.get("input[ng-model='perfil.senha']").type(Cypress.env("senhanucleo"))
        cy.get("button[ng-click='validarLogin(perfil)']").click();

        cy.get(".sidebar-links > li:nth-child(4)").click()
        cy.get(".open li:nth-child(1)").click()
        cy.wait(3000)
        cy.get("div[ng-model='termo.nomeAluno']").click()
        cy.get("div#ui-select-choices-row-0-0 > a > div").click()
        cy.get("div[ng-model='termo.empresa']").click()
        cy.get("div#ui-select-choices-row-1-2 > a > div").click()
        cy.get("div[ng-model='termo.empresa']").click()
        cy.get("div#ui-select-choices-row-1-1 > a > div").click()

        cy.get("div[ng-model='termo.codigoVaga']").click()
        cy.get("div#ui-select-choices-row-2-0 > a > div").click()

      
       

    })

})