describe("Bug#14628", () => {

    it("Foi permitido a inserção com datas iguais?", () => {

        cy.viewport(1366,768);
       cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
       cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("1410001");
       cy.get(".form-group:nth-child(3) > .form-control").type("aluno");
       cy.get(".form-group > .btn").click();

       cy.wait(3000);
       cy.get(".sidebar-links > li:nth-child(1)").click();

       cy.wait(3000);
       cy.get(".seletor-form-cadastro:nth-child(2)").click();
       cy.get(".bloco-cadastro:nth-child(1) > h3 > .fas").click();
       cy.get("select[name='tipoFormacao']").select("Graduação");
       cy.get("input[name='descricaoCurso']").type("Relações Internacionais");
       cy.get("select[name='instituicaoEnsino']").select("FATEC - IPIRANGA");
       cy.get("input[id='dataInicio']").type("2020-01-23");
       cy.get("input[id='dataTermino']").type("2020-01-23");
       cy.get("#formacaoAcademica .modal-footer > .btn").click();

       cy.wait(3000);
       cy.get("div[ng-bind-html='message']").should("be.visible");

    })

})