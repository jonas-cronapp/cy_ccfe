describe("Bug#14632", () => {

    it("Existe ação no título da vaga?", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");


        cy.get("li:nth-child(1) .perfil-icon").click()

        cy.get("input[ng-model='perfil.login']").type("nucleo@nucleo.com")
        cy.get("input[ng-model='perfil.senha']").type("admin")
        cy.get("button[ng-click='validarLogin(perfil)']").click();

        cy.get(".sidebar-links > li:nth-child(4)").click()
        cy.get(".open li:nth-child(1)").click()

        cy.get(".ng-valid > .ui-select-match").type("Teste")

       

    })

})