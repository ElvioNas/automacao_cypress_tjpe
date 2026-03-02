describe('Simap | Distribuição', () => {

   it( '1 - Distribuição | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
     
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   cy.get('[data-cy="DistribuicaoHeading"] span').should('have.text', 'Distribuições');
   cy.get('button.p-overlay-badge').should('have.text', '\n        \n        Filtros\n        \n      ');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Criar nova Distribuição ');
   cy.get('#entities th[jhisortby="diretoria.id"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="descricao"] span').should('have.text', 'Descrição');
   cy.get('#entities th[jhisortby="dataInicial"] span').should('have.text', 'Data Inicial');
   cy.get('#entities th[jhisortby="dataFinal"] span').should('have.text', 'Data Final');
   cy.get('#entities th[jhisortby="distribuida"] span').should('have.text', 'Distribuída');
   cy.get('button.p-overlay-badge span.p-button-label').click();
   cy.get('h3').should('have.text', 'Busca por filtros');
   cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('label[for="field_dataInicial"]').should('have.text', 'Data Inicial');
   cy.get('label[for="field_dataFinal"]').should('have.text', 'Data Final');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').should('have.text', 'Aplicar');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('[data-cy="DistribuicaoCreateUpdateHeading"]').should('have.text', '\n    Criar Distribuição\n  ');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
   cy.get('label[for="field_dataInicial"]').should('have.text', 'Data Inicial');
   cy.get('label[for="field_dataFinal"]').should('have.text', 'Data Final');
   cy.get('label[for="field_qtdDiasUteis"]').should('have.text', 'Qtd Dias Úteis');
   cy.get('label[for="field_observacao"]').should('have.text', 'Observação');
   cy.get('[data-cy="entityCreateCancelButton"] span.w-full').should('have.text', '\n                \n                Cancelar\n              ');
   })

   it( '2 - Distribuição | Criar Nova Distribuição', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
     
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   cy.get('[data-cy="DistribuicaoHeading"] span').should('have.text', 'Distribuições');
   cy.get('[data-cy="entityCreateButton"]').click();
   cy.get('[data-cy="descricao"]').click();
   cy.get('[data-cy="descricao"]').type('teste de sistema');
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').type('02/02/2026');
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('[data-cy="dataFinal"] input.p-element').type('02/02/2026');
   cy.get('[data-cy="qtdDiasUteis"]').click();
   cy.get('[data-cy="qtdDiasUteis"]').type('5');
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="observacao"]').type('teste de sistema');
   cy.get('[data-cy="entityCreateSaveButton"]').click();
   cy.get('div.break-words').should('have.text', 'Distribuição inserida com sucesso.');
   })

   it( '3 - Distribuição | Pesquisar Nova Distribuição', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
     
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   
   cy.get('button.p-overlay-badge span.p-button-label').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').type('02/02/2026');
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('[data-cy="dataFinal"] input.p-element').type('02/02/2026');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   })

   it( '4 - Distribuição | Editar Nova Distribuição', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
     
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/distribuicao"] span.font-medium').click();
   cy.get('tr[data-cy="entityTable"]:nth-of-type(1) i.pi-pencil').click();
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="observacao"]').type(' teste de sistema');
   cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').click();
   cy.get('div.break-words').should('have.text', 'Distribuição atualizada com sucesso.');
   })
})
