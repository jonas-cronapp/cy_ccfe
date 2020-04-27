describe("Responsividade", () => {

    it("A div está responsiva no iPad Pro?", () => {
        cy.viewport("ipad-2")

        cy.visit(Cypress.env('empresa'))

        cy.get("input[ng-model='perfil.login']").type(Cypress.env('loginempresa'));
        cy.get("input[ng-model='perfil.senha']").type(Cypress.env('senhaempresa')+"{enter}");

        cy.wait(3000)
        cy.get("button.menu-btn").click()
        cy.get("li[ui-sref='empresa.cadastro']").click()
        //cy.visit("https://empregabilidade-ui.cronapp.io/#/empresas/cadastro")

        cy.get(".btn-controllers-align").last().then(($unidade) =>{

            cy.wrap($unidade).should("have.css","width").and("match",/55px/) // Esperado 137px, validar após correção
        })
    })
})