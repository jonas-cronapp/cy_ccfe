describe("Bug#14650", () => {

    it("Login de aluno e núcleo de estágio", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
        cy.get("div.banner-content").should("be.visible");

    }),

    it("Login empresas", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/empresas");
        cy.get("div.banner-content").should("be.visible");

    })


})