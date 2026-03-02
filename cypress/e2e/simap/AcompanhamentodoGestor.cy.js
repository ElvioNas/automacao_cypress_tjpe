describe('Sistema Simap |  Acompanhamento do Gestor', () => {

   it( '1 - Acompanhamento do Gestor | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   
   
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/acompanhamento-gestor"] span.font-medium').click();
   cy.get('[data-cy="AcompanhamentoGestorsHeading"] span').should('have.text', 'Acompanhamento do Gestor');
   cy.get('#entities th[jhisortby="diretoria.nome"] span.titulo-coluna').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="descricao"] span.titulo-coluna').should('have.text', 'Distribuição');
   cy.get('#entities th[jhisortby="dataInicial"] span.titulo-coluna').should('have.text', 'Período');
   cy.get('#entities th[jhisortby="distribuidos"] span.titulo-coluna').should('have.text', 'Qtd distribuídos');
   cy.get('#entities th[jhisortby="totalConcluido"] span.titulo-coluna').should('have.text', 'Qtd concluídos');
   cy.get('#entities th[jhisortby="percentagemConcluido"] span.titulo-coluna').should('have.text', 'Percentual Concluídos');
   cy.get('span.p-button-label').should('have.text', 'Filtros');
   cy.get('i.ml-1').click();
   cy.get('h3').should('have.text', 'Filtros de Pesquisa');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
   cy.get('label[for="field_dataInicial"]').should('have.text', 'Data Inicial');
   cy.get('label[for="field_dataFinal"]').should('have.text', 'Data Final');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').should('have.text', 'Pesquisar');
   })

    it( '2 - Acompanhamento do Gestor | Pesquisar', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   
   
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/acompanhamento-gestor"] span.font-medium').click();
   cy.get('button.block').click();
   cy.get('[data-cy="diretoria"]').click();
   cy.get('[data-cy="diretoria"]').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('#pn_id_24_panel span[data-date="2026-1-2"]').click();
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('#pn_id_25_panel span[data-date="2026-1-2"]').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
    })
})