
describe('Selecione / Relatório', () => {



it.skip('1 - Minhas Avaliações / Validação de Label', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
  //  cy.get('a.alert-link').click();
  //  cy.wait(15000)
      cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
   // cy.get('#home-logged-message').click();
   // cy.get('#home-logged-message span.font-bold').should('have.text', 'Elvio Ferreira do Nascimento.');
   // cy.get('div.self-center').click();
   // cy.get('div.self-center').should('have.text', 'Estágio Probratorio');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(3) a.font-medium span.font-medium').should('have.text', 'Selecione');
    cy.get('[data-cy="navbar"] li:nth-child(3) a.font-medium span.font-medium').click();
   // cy.get('[data-cy="navbar"] a[href="/minhas-avaliacoes"] span.font-medium').click();
   // cy.get('div.justify-between').click();
    //cy.get('[data-cy="LiberacaoAvaliacaoHeading"] span').should('have.text', 'Minhas avaliações');


  //  cy.get('timesicon[pc10=""] svg.p-icon').click();
  //  cy.get('timesicon[pc13=""] svg.p-icon').click();
    //cy.get('timesicon.p-component svg.p-icon').click();
})
it.skip('2 - Realizar avaliação / Validação de Label', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    //cy.get('a.alert-link').click();
       // cy.wait(15000)
    cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    //cy.get('#home-logged-message').click();
       // cy.get('#home-logged-message span.font-bold').should('have.text', 'Elvio Ferreira do Nascimento.');
       // cy.get('div.self-center').click();
       // cy.get('div.self-center').should('have.text', 'Estágio Probratorio');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(3) a.font-medium span.font-medium').should('have.text', 'Selecione');
    cy.get('[data-cy="navbar"] li:nth-child(3) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/consultar-avaliado"] span.font-medium').click();
    cy.get('div.items-center.container').click();
    
      //  cy.get('[data-cy="TarefaHeading"] span').should('have.text', 'Consultar Avaliado');
       // cy.get('p-iconfield[pc2=""]').click();
      //  cy.get('p-iconfield[pc2=""] label.p-col-12').should('have.text', 'Matrícula do avaliado*');
      /*
    cy.get('div.h-full div:nth-child(4)').click();
    cy.get('div.h-full').click();
    cy.get('div.h-full div:nth-child(4)').click();
    cy.get('label[for="etapa"]').should('have.text', 'Etapa*');
    cy.get('div:nth-child(5)').click();
    cy.get('label[for="chefia"]').should('have.text', 'Chefia*');
    cy.get('button.p-ripple').should('have.text', 'Iniciar Avaliação');
    */
    cy.get('[data-cy="TarefaHeading"] span').click();
    cy.get('div.items-center.container').click();
    cy.get('[data-cy="TarefaHeading"] span').should('have.text', 'Realizar Avaliação');
    cy.get('p-iconfield[pc134=""]').click();
    cy.get('p-iconfield[pc134=""] label.p-col-12').should('have.text', 'Matrícula do avaliado');
    cy.get('div:nth-child(5)').click();
    cy.get('label[for="etapa"]').should('have.text', 'Etapa');
    cy.get('div.mt-2').click();
    cy.get('label[for="chefia"]').should('have.text', 'Chefia');
})
})