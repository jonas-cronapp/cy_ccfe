describe("Bug#14630", () => {

    it("Campo numero da apolice aceita somente número?", () => {

        cy.viewport(1366,768);
       cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
       cy.get("li:nth-child(1) .perfil-icon").click();
       cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
       cy.get(".form-group:nth-child(3) > .form-control").type("admin");
       cy.get(".form-group > .btn").click();

       cy.get(".sidebar-links > li:nth-child(4)").click();
       cy.get(".open li:nth-child(1)").click();

       cy.get(".bloco-cadastro:nth-child(9) .col-md-4 > .form-control").type("OZL2531ZZ");
       cy.get(".bloco-cadastro:nth-child(9) .col-md-4 > .form-control").should("not.have.value","OZL2531ZZ");

    })

})