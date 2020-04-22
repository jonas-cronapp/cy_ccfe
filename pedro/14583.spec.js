describe('Responsividade Empregabilidade', function () {
    beforeEach(() => {
        cy.visit(Cypress.env('empresa'))

        cy.wait(3000)
        cy.get('input[ng-model="perfil.login"]').type(Cypress.env('loginempresa'));
        cy.get('input[ng-model="perfil.senha"]').type(Cypress.env('senhaempresa')+'{enter}');
    })

    context('720p resolução', function() {
        
        it('Mostra o menu por default', function() {
            cy.viewport(1280, 720)
            cy.get('#sidebar').should('be.visible')
            cy.get('.menu-btn').should('not.be.visible') // botão para abrir menu lateral

            cy.wait(5000)
        })
    })

    context('Resolução iphone-5', function() {
        it('Mostra o menu mobile ao clicar', function() {
            cy.viewport(320, 568)
            cy.get('#sidebar').should('not.be.visible')
            cy.get('button.menu-btn').should('be.visible')
            cy.get('button.menu-btn').click()

            cy.wait(2000)

            cy.get('.menu-btn').should('be.visible')
        })
    })
})