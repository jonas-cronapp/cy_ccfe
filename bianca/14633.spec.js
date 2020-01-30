describe("Bug#14633", () => {

    it("A div está centralizada?", () => {

        cy.viewport(768,1024);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/empresas");


       // cy.get("li:nth-child(1) .perfil-icon").click()

        cy.get("input[ng-model='perfil.login']").type("21333333444422")
        cy.get("input[ng-model='perfil.senha']").type("21333")
        cy.get("button[ng-click='validarLogin(perfil)']").click();

       //cy.get("li:nth-child(5)").click()
       cy.get("button.menu-btn").click()
       cy.get("li:nth-child(7)").click()

       cy.get(".col-lg-12:nth-child(1)").should("have.class","col-sm-12").and("have.class","col-md-12")
       
       
     
       

    })

})