describe("Bug#14629", () => {

    it("A div está centralizada? Ipad", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
        cy.get("li:nth-child(1) .perfil-icon").click();
        cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
        cy.get(".form-group:nth-child(3) > .form-control").type("admin");
        cy.get(".form-group > .btn").click();

        cy.get(".sidebar-links > li:nth-child(4)").click();
        cy.get(".open li:nth-child(1)").click();

        cy.wait(1000)
        cy.viewport(768,1024);
        cy.get(".fa-bars").click()
        cy.get(".col-md-12 > .ng-scope:nth-child(2)").screenshot({border: 10})


    }),

    it("A div está centralizada? Iphone 6 / Galaxy S9", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
        cy.get("li:nth-child(1) .perfil-icon").click();
        cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
        cy.get(".form-group:nth-child(3) > .form-control").type("admin");
        cy.get(".form-group > .btn").click();

        cy.get(".sidebar-links > li:nth-child(4)").click();
        cy.get(".open li:nth-child(1)").click();

        cy.wait(1000)
        cy.viewport(320,568);
        cy.get(".fa-bars").click()
        cy.get(".col-md-12 > .ng-scope:nth-child(2)").screenshot({border: 10})


    }),

    it("A div está centralizada? Iphone 6s / Galaxy S9 plus", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");
        cy.get("li:nth-child(1) .perfil-icon").click();
        cy.get(".access-form > .form-group:nth-child(2) > .form-control").type("nucleo@nucleo.com");
        cy.get(".form-group:nth-child(3) > .form-control").type("admin");
        cy.get(".form-group > .btn").click();

        cy.get(".sidebar-links > li:nth-child(4)").click();
        cy.get(".open li:nth-child(1)").click();

        cy.wait(1000)
        cy.viewport(414,736);
        cy.get(".fa-bars").click()
        cy.get(".col-md-12 > .ng-scope:nth-child(2)").screenshot({border: 10})


    })



})