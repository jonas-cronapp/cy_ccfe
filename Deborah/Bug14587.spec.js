describe ("Empregabilidade", function() {
	it("Automatização do Bug 14587", function () {
		cy.visit(Cypress.env('empresa'));
		cy.wait(1500);
		cy.viewport(1440,900);
		cy.get("input[placeholder='E-mail ou CNPJ']").type(Cypress.env('loginempresa'));
		cy.get("input[placeholder='Senha']").type(Cypress.env('senhaempresa'));
		cy.get("button[ng-click='validarLogin(perfil)']").click();
		cy.wait(2000);
		/*cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > ul > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(3)").then(
			$x => {$x.css('border', '2px solid red')}

			).click().then($y => {$y.css('border', 'none')});*/
		cy.get("i[ng-click='openCard($event)']").last().then(
				$x => {$x.css('border', '2px solid red')}
			).click().then(
				$y => {$y.css('border', 'none')}
			);

		cy.wait(1500);
		/*cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > ul > li:nth-child(1) > div:nth-child(1) > div:nth-child(1)").then(
			

			).click();*/
		cy.get("span[class='vaga-info-nome ng-binding']").last().then(
				$z => {$z.css('border', '2px solid red')}
			).click();
		cy.wait(1500);
		cy.screenshot("Bug14587",{
			capture: 'viewport'
		});

	})
})