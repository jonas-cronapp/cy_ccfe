describe ("Bug14615",function(){
    it("confirnmação bug",function(){
        cy.visit (Cypress.env('empresa'))
        cy.get ("input[placeholder='E-mail ou CNPJ']").type (Cypress.env('loginempresa'))
        cy.get ("input[placeholder='Senha']") .type (Cypress.env('senhaempresa'))
        cy.get (".btn").first().click()
        cy.wait (2000)

        cy.get("li[ui-sref='empresa.cadastro']").click()
        cy.get("i[ng-click='editarContato(contato, $index)']").click()
        cy.get(".ng-valid-pattern .close").click()
        cy.get("body.pace-done:nth-child(2) div.fill.ng-scope:nth-child(2) div.ng-scope div.container-fluid.bg-branco:nth-child(4) div.container:nth-child(1) div.row div.col-md-12.col-lg-9.main-content.content.ng-scope div.ng-scope:nth-child(1) form.ng-valid-email.ng-valid-pattern.ng-valid-maxlength.ng-valid.ng-valid-required.ng-dirty.ng-valid-mask.ng-valid-parse div.col-lg-12.col-md-12 div.cadastro-tab-content.dados-profissionais.info-cad div.bloco-cadastro:nth-child(3) div.row:nth-child(3) div.bloco-cadastro:nth-child(1) h3:nth-child(1) > i.fas.fa-plus-square").click()
        cy.wait (3000)
        cy.screenshot()
        
    })
})