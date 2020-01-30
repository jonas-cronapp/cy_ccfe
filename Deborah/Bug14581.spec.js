describe ("Empregabilidade", function() {
	it("Automatização do Bug 14581", function() {
		cy.visit("https://empregabilidade-ui.cronapp.io/#/empresas");
		cy.wait(1500);
		cy.viewport(1440,900);
		cy.get("input[placeholder='E-mail ou CNPJ']").type("21333333444422");
		cy.get("input[placeholder='Senha']").type("21333");
		cy.get("button[ng-click='validarLogin(perfil)']").click();
		cy.wait(2000);
		cy.get("span").contains("Home").click();
		//cy.get("body.pace-done:nth-child(2) div.fill.ng-scope:nth-child(2) div.ng-scope div.container-fluid.bg-branco:nth-child(4) div.container:nth-child(1) div.row div.col-md-12.col-lg-9.main-content.content.ng-scope div.big-boxes.ng-scope div.content-box:nth-child(2) ul.card-vagas-lista.ng-scope li.card-vaga.ng-scope:nth-child(1) div.card-top.clicked-card div.vaga-data > i.seta-card.fas.vaga-data-item.fa-angle-up").click();
		cy.get("i[ng-click='openCard($event)']").first().click();
	})
})