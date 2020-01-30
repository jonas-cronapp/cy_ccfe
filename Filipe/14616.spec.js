describe ("Bug 14616", function(){
    it ("Confirmação bug",function(){
        cy.visit ("https://empregabilidade-ui.cronapp.io/#/empresas")
        cy.get ("input[placeholder='E-mail ou CNPJ']").type ("21333333444422")
        cy.get ("input[placeholder='Senha']") .type ("21333")
        cy.get (".btn").first().click()
        cy.wait (2000)
        cy.visit ("https://empregabilidade-ui.cronapp.io/#/empresas/cadastro")
        cy.wait (4000)
        cy.get(".ng-scope:nth-child(1) > td .ng-pristine") .click()
        cy.get(".ng-scope:nth-child(2) > td .ng-pristine") .click()
        cy.screenshot()
    })
})