describe("Bug#14653", () => {

    it("Checkbox 1 está desabilitado?", () => {

        cy.viewport(1366,768);
       cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
       cy.get("li:nth-child(1) .perfil-icon").click();
       cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
       cy.get(".form-group:nth-child(3) > .form-control").type("admin");
       cy.get(".form-group > .btn").click();

       cy.wait(3000);
       cy.get("li:nth-child(6)").click();
       cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
       cy.wait(4000);
       cy.get("tr:nth-child(1) > .col-md-6:nth-child(1) .switch-label").click();
       cy.get(".btn-success:nth-child(2)").click();
       
       cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
       cy.get("input[id='acessoAluno']").should("be.disabled");
       
    }),

    it("Checkbox 2 está desabilitado?", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
        cy.get("li:nth-child(1) .perfil-icon").click();
        cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
        cy.get(".form-group:nth-child(3) > .form-control").type("admin");
        cy.get(".form-group > .btn").click();
 
        cy.wait(3000);
        cy.get("li:nth-child(6)").click();
        cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
        cy.wait(4000);
        cy.get(".col-md-6:nth-child(2) .switch-label").click();
        cy.get(".btn-success:nth-child(2)").click();
        
        cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
        cy.get("input[id='altDadosPessoais']").should("be.disabled");

    }),

    it("Checkbox 3 está desabilitado?", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
        cy.get("li:nth-child(1) .perfil-icon").click();
        cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
        cy.get(".form-group:nth-child(3) > .form-control").type("admin");
        cy.get(".form-group > .btn").click();
 
        cy.wait(3000);
        cy.get("li:nth-child(6)").click();
        cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
        cy.wait(4000);
        cy.get("tr:nth-child(2) .switch-label").click();
        cy.get(".btn-success:nth-child(2)").click();
        
        cy.get(".ng-scope:nth-child(2) > .col-xs-2 > .fa-edit").click();
        cy.get("input[id='termoAditivo']").should("be.disabled");

    })

})