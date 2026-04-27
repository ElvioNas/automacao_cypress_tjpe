describe('LegJud | Menu Prcessos de 1º Grau', () => {

   it.skip( '1 - Consultar Processos de 1º Grau | Validar Label', () => {
    
    //Comarca
    
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
    cy.get('li:nth-of-type(1) [data-cy="adminMenu"] span.font-medium').click();
    cy.get('[data-cy="navbar"] a[routerlink="/solicitacoes-desarquivamento"]').click();
    cy.get('[data-cy="SolicitacaoDesarquivamentoHeading"] span').should('have.text', 'Consultar Solicitação de Desarquivamento');
    cy.get('span.p-button-label').should('have.text', 'Filtros');
   })

})
