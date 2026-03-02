describe('Simap | Mapeamento Vara e Diretoria', () => {

   it( '1 - Mapeamento Vara e Diretoria | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/vara-diretoria"] span.font-medium').click();
   cy.get('[data-cy="VaraDiretoriaHeading"] span').should('have.text', 'Mapeamento Vara e Diretoria');
   cy.get('#entities th:nth-child(1) span').should('have.text', 'Vara');
   cy.get('#entities th:nth-child(2) span').should('have.text', 'Diretoria');
   cy.get('button.p-overlay-badge').should('have.text', '\n        \n        Filtros\n        \n        \n          1\n        \n        \n      ');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Novo Mapeamento Vara e Diretoria ');
   cy.get('button.p-overlay-badge').click();
   cy.get('h3').should('have.text', 'Busca por filtros');
   cy.get('label[for="field_varaPreferencialCodPje"]').should('have.text', 'Varas');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   cy.get('button.p-button-sm.p-button-rounded').should('have.text', '\n          Aplicar\n        ');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('[data-cy="VaraDiretoriaCreateUpdateHeading"]').should('have.text', '\n    \n    Criar\n    \n    Mapeamento Vara e Diretoria\n  ');
   cy.get('label[for="field_unidadesJudiciarias"]').should('have.text', ' Vara ');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('[data-cy="entityCreateCancelButton"] span.w-full').should('have.text', '\n              \n              Cancelar\n            ');
   })


   it( '2 - Mapeamento Vara e Diretoria | Novo Mapeamento', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/vara-diretoria"] span.font-medium').click();
   cy.get('[data-cy="VaraDiretoriaHeading"] span').should('have.text', 'Mapeamento Vara e Diretoria');
   cy.get('#entities th:nth-child(1) span').should('have.text', 'Vara');
   cy.get('#entities th:nth-child(2) span').should('have.text', 'Diretoria');
   cy.get('button.p-overlay-badge').should('have.text', '\n        \n        Filtros\n        \n        \n          1\n        \n        \n      ');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Novo Mapeamento Vara e Diretoria ');
   cy.get('button.p-overlay-badge').click();

   })
})