describe('Simap | Meus Processos', () => {

   it( '1 - Meus Processos | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/historico-servidor-processo"] span.font-medium').click();
   cy.get('div.justify-between').should('have.text', '\n    \n      Meus Processos\n    \n    \n      \n      \n        \n        Filtros\n        \n        \n          1\n        \n        \n      \n    \n  ');
   cy.get('span.p-button-label').should('have.text', 'Filtros');
   cy.get('span.p-button-label').click();
   cy.get('h3').should('have.text', 'Filtros de Pesquisa');
   cy.get('label[for="field_idUnidadeJudiciaria"]').should('have.text', 'Unidade Judiciária');
   cy.get('label[for="field_npu"]').should('have.text', 'NPU');
   cy.get('label[for="input_filter_servidor"]').should('have.text', 'Servidor');
   cy.get('label[for="field_concluido"]').should('have.text', 'Apenas Pendentes');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').should('have.text', 'Pesquisar');
   })

   it( '2 - Meus Processos | Pesquisar', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   
   cy.get('[data-cy="navbar"] li.dropdown.ng-star-inserted a.font-medium').click();
   cy.get('[data-cy="navbar"] a[routerlink="/historico-servidor-processo"] span.font-medium').click();
   cy.get('div.justify-between').should('have.text', '\n    \n      Meus Processos\n    \n    \n      \n      \n        \n        Filtros\n        \n        \n          1\n        \n        \n      \n    \n  ');
   cy.get('span.p-button-label').should('have.text', 'Filtros');
   cy.get('span.p-button-label').click();
    cy.get('button.block').click();
   cy.get('span.p-button-label').click();
   cy.get('#field_idUnidadeJudiciaria div.p-dropdown-trigger').click();
   cy.get('#field_idUnidadeJudiciaria_0 div.flex').click();
   cy.get('button.p-button-sm.p-button-rounded').click();
   cy.get('[data-cy="servidor"]').click();
   })
})