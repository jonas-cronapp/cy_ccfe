describe("Bug#14650", () => {

    it("Login de aluno e núcleo de estágio", () => {

        cy.viewport(1366,768);
        cy.visit(Cypress.env("nucleo"));
        cy.get("div.banner-content").should("be.visible");

    }),

    it("Login empresas", () => {

        cy.viewport(1366,768);
        cy.visit(Cypress.env("empresa"));
        cy.get("div.banner-content").should("be.visible");

    })


})