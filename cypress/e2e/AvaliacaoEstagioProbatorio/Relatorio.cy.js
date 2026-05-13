describe('Estágio Probatório / Relatório', () => {

  /*beforeEach(() => { 

  cy.login() 

     }) */
it.skip('1 - Relatório / Validação de Label', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
       
      cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(3) a.font-medium span.font-medium').should('have.text', 'Selecione');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/avaliacao-completa"] span.font-medium').click();
    cy.get('div.justify-between').click();
    cy.get('[data-cy="AvaliacaoCompletaHeading"] span').should('have.text', 'Servidores que concluíram a 6ª etapa');
    cy.get('button.block span.p-button-label').should('have.text', 'Filtros');
    cy.get('#entities th[jhisortby="matricula"]').click();
    cy.get('#entities th[jhisortby="matricula"]').click();
    cy.get('#entities th[jhisortby="matricula"] div.flex').should('have.text', '\n                  Matricula\n\n                  \n                ');
    cy.get('#entities th[jhisortby="nome"]').click();
    cy.get('#entities th[jhisortby="nome"] span.uppercase').should('have.text', 'Nome');
    cy.get('#entities th[jhisortby="lotacao"] div.flex').click();
    cy.get('#entities th[jhisortby="lotacao"] div.flex').click();
    cy.get('#entities th[jhisortby="lotacao"] span.uppercase').click();
    cy.get('#entities th[jhisortby="lotacao"] div.flex').click();
    cy.get('#entities th[jhisortby="lotacao"] span.uppercase').should('have.text', 'Lotação');
    cy.get('#entities th[jhisortby="cargo"] div.flex').click();
    cy.get('#entities th[jhisortby="cargo"] div.flex').click();
    cy.get('#entities th[jhisortby="cargo"] span.uppercase').should('have.text', 'Cargo');
    cy.get('#entities th[jhisortby="dataSextaEtapa"] div.flex').click();
    cy.get('#entities th[jhisortby="dataSextaEtapa"] span.uppercase').should('have.text', 'Data Conclusão');
    cy.get('#entities th[jhisortby="mediaGeral"] div.items-center.justify-center').click();
    cy.get('#entities span.text-center').should('have.text', 'Média Geral');
    
    cy.get('button[pc141=""] span.p-button-label').should('have.text', 'Exportar');
    
        cy.get('button.block span.p-button-label').click();
    cy.get('h3').click();
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_matricula"]').should('have.text', 'Matrícula');
    cy.get('div.grid').click();
    cy.get('label[for="field_nome"]').should('have.text', 'Nome');
    cy.get('div:nth-child(3) > div.flex > label.inline-block').click();
    cy.get('div:nth-child(3) > div.flex > label.inline-block').click();
    cy.get('div:nth-child(3) > div.flex > label.inline-block').should('have.text', 'Lotação');
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('div:nth-child(4) label.inline-block').should('have.text', 'Cargo');
    cy.get('div:nth-child(5) label.inline-block').click();
    cy.get('div.grid').click();
    cy.get('div:nth-child(5) label.inline-block').should('have.text', 'Data Conclusão Inicial');
    cy.get('div.grid').click();
    cy.get('div:nth-child(6) label.inline-block').should('have.text', 'Data Conclusão Final');
    cy.get('div.col-span-12.flex').click();
    cy.get('a.underline span').should('have.text', 'Limpar Todos');
    
    cy.get('button[pc196=""] span.p-button-label').should('have.text', 'Aplicar');
})
})