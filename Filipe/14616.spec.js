describe ("Bug 14616", function(){
    it ("Confirmação bug",function(){
        cy.visit (Cypress.env('empresa'))
        cy.get ("input[placeholder='E-mail ou CNPJ']").type (Cypress.env('loginempresa'))
        cy.get ("input[placeholder='Senha']") .type (Cypress.env('senhaempresa'))
        cy.get (".btn").first().click()
        cy.wait (2000)
        cy.get("li[ui-sref='empresa.cadastro']").click()
        cy.wait (4000)
        cy.get(".ng-scope:nth-child(1) > td .ng-pristine").first().click()
        cy.get(".ng-scope:nth-child(2) > td .ng-pristine") .click()
        cy.screenshot()
    })
})