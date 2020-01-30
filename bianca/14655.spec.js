describe("Bug#14655", () => {

    it("O campo está desabilitado?", () => {

        cy.viewport(1366,768);
       cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
       cy.get("li:nth-child(1) .perfil-icon").click();
       cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
       cy.get(".form-group:nth-child(3) > .form-control").type("admin");
       cy.get(".form-group > .btn").click();

       cy.wait(3000);
       cy.get("li:nth-child(6)").click();
       cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
       cy.get(".ng-scope:nth-child(2) > .col-sm-3 > .fas").click();
       cy.get(".checkbox:nth-child(1) > .switch-label").click();
       cy.get("#notificacoes .btn").click();
       cy.get(".btn-success:nth-child(2)").click();

       cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
       cy.get(".ng-scope:nth-child(2) > .col-sm-3 > .fas").click();
       cy.get("input[id='notificarAluno']").should("be.disabled");



    })

})