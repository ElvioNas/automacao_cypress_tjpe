describe('Simap | Metas', () => {

   it( '1 - Metas | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/meta-diretoria"] span.font-medium').click();
   cy.get('[data-cy="MetaDiretoriaHeading"] span').should('have.text', 'Cadastro de Metas Diárias (Processos)');
   cy.get('span.p-button-label').should('have.text', 'Filtros');
   cy.get('#entities th[jhisortby="diretoria.nome"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="regimeTrabalho.descricao"] span').should('have.text', 'Regime de Trabalho');
   cy.get('#entities th[jhisortby="valorMeta"] span').should('have.text', 'Meta Diária (Processos)');
   cy.get('span.p-button-label').click();
   cy.get('[data-cy="MetaDiretoriaHeading"] span').should('have.text', 'Cadastro de Metas Diárias (Processos)');
   cy.get('h3').should('have.text', 'Filtros de Pesquisa');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('label[for="field_regimeTrabalho"]').should('have.text', 'Regime de Trabalho');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').should('have.text', 'Pesquisar');
   cy.get('#entities th[jhisortby="diretoria.nome"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="regimeTrabalho.descricao"] span').should('have.text', 'Regime de Trabalho');
   cy.get('#entities th[jhisortby="valorMeta"] span').should('have.text', 'Meta Diária (Processos)');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').should('have.text', 'Pesquisar');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   })

   it( '2 - Metas | Editar Meta', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/meta-diretoria"] span.font-medium').click();
   cy.get('tr[data-cy="entityTable"]:nth-of-type(1) i.pi-pencil').click();
   cy.get('#locale-brasil').click();
   cy.get('#locale-brasil').clear();
   cy.get('#locale-brasil').type('35,00');
   cy.get('[data-cy="entityCreateSaveButton"] span.w-full').click();
   cy.get('div.break-words').should('have.text', 'Meta Altualizada com Sucesso!');
   })
})
