describe("Bug#14655", () => {

    it("O campo está desabilitado?", () => {

        cy.viewport(1366,768);
       cy.visit(Cypress.env("nucleo"));
       cy.wait(3000)
       cy.get("li:nth-child(1) .perfil-icon").click();
       cy.get(".access-form > .form-group:nth-child(2) > .form-control").type(Cypress.env("loginnucleo"));
       cy.get(".form-group:nth-child(3) > .form-control").type(Cypress.env("senhanucleo"));
       cy.wait(3000)
       cy.get(".form-group > .btn").click();

       cy.wait(3000);
       cy.get("li:nth-child(6)").first().click();
       cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
       cy.get(".fa-bell:nth-child(1)").click()
       cy.get(".checkbox:nth-child(1) > .switch-label").click();
       cy.get("#notificacoes .btn").click();
       cy.get(".btn-success:nth-child(2)").click();

       cy.wait(3000)
       cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();

       cy.get(".fa-bell:nth-child(1)")
       cy.get("input[id='notificarAluno']").should("be.disabled");



    })

})