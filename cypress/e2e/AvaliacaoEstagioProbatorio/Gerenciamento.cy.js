describe('Estágio Probatório / Gerenciamento', () => {

  /*beforeEach(() => { 

  cy.login() 

     }) */
it.skip('1 - Realizar avaliação SGP / Validação de Label', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
     cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(15000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
     cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/consultar-avaliado/sgp"] span.font-medium').click();
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/consultar-avaliado/sgp"] span.font-medium').click();
    cy.get('div.items-center.container').click();
    cy.get('[data-cy="navbar"] li:nth-child(3) a.font-medium span.font-medium').should('have.text', 'Selecione');
    cy.get('[data-cy="TarefaHeading"]').click();
    cy.get('[data-cy="TarefaHeading"] span').should('have.text', 'Realizar Avaliação SGP');
    cy.get('p-iconfield[pc134=""]').click();
    cy.get('p-iconfield[pc134=""] label.p-col-12').should('have.text', 'Matrícula do avaliado');
    cy.get('p-iconfield[pc136=""]').click();
    cy.get('p-iconfield[pc136=""] label.p-col-12').should('have.text', 'Matrícula do avaliador (Opcional)');
    cy.get('div:nth-child(5)').click();
    cy.get('label[for="etapa"]').should('have.text', 'Etapa');
    cy.get('div.mt-2').click();
    cy.get('label[for="chefia"]').should('have.text', 'Chefia');
})

it.skip('2 - Realizar avaliação SGP / Consultar com dados inexistente', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
     cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/consultar-avaliado/sgp"]').click();
    cy.get('#matricula').click();
    cy.get('#matricula').type('132132131');
    cy.get('div.min-h-screen').click();
    cy.get('div.p-toast-summary').click();
    cy.get('div.p-toast-summary').should('have.text', ' Não existem avaliações pendentes para a matrícula informada. ');
})

it.skip('3 - Liberar avaliação de estágio probatório / Validação de Label', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
      cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/liberacao-avaliacao"] span.font-medium').click();
    cy.get('div.pt-4').click();
    cy.get('[data-cy="LiberacaoAvaliacaoHeading"] span').should('have.text', 'Liberar Avaliação de Estágio Probatório');
    cy.get('div.bg-white').click();
    cy.get('label.p-col-12').should('have.text', 'Matrícula do avaliado:');
})

it.skip('4 - Liberar avaliação de estágio probatório / Pesquisar com dados inexistestes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
     
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/liberacao-avaliacao"] span.font-medium').click();
    cy.get('div.pt-4').click();
    cy.get('[data-cy="LiberacaoAvaliacaoHeading"] span').should('have.text', 'Liberar Avaliação de Estágio Probatório');
    cy.get('#matricula').click();
    cy.get('#matricula').type('123456');
    
    cy.get('span.p-button-label').click();
    cy.get('div.p-toast-message-content').click();
    cy.get('div.p-toast-summary').should('have.text', ' Avaliado não encontrado. ');
})


it.skip('5 - Gerenciar tarefas de produtividade / Validação de Label', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
      
     cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
  
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/tarefa"] span.font-medium').click();
    cy.get('div.justify-between').click();
    //cy.get('[data-cy="TarefaHeading"] span').should('have.text', 'Tarefas');
    cy.get('button.relative').click();
    cy.get('h3').click();
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_id"]').should('have.text', 'Id');
    cy.get('div.grid').click();
    cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
    cy.get('div.grid').click();
    cy.get('label[for="field_ativo"]').should('have.text', 'Status');
    cy.get('div:nth-child(4) > div.flex').click();
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_atividade"]').should('have.text', 'Atividade');
    cy.get('div.flex.justify-end').click();
    cy.get('a.underline span').should('have.text', 'Limpar Todos');
    cy.get('div.grid').click();
       // cy.get('button[pc68=""] span.p-button-label').should('have.text', 'Aplicar');
       cy.get('button[pc220=""]').should('have.text', '\n            Aplicar\n          ');
        cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Criar novo Tarefa ');
    cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
    cy.get('div.mx-auto').click();
    cy.get('[data-cy="TarefaCreateUpdateHeading"]').should('have.text', 'Criar ou editar Tarefa');
    cy.get('div.grid div:nth-child(1)').click();
    cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
    cy.get('label[for="field_ativo"]').click();
    cy.get('div.grid').click();
    cy.get('div.grid').click();
    cy.get('label[for="field_ativo"]').should('have.text', 'Status');
    cy.get('div.grid div:nth-child(3)').click();
    cy.get('label[for="field_atividade"]').should('have.text', 'Atividade');
    cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').should('have.text', 'Salvar');
    cy.get('[data-cy="entityCreateCancelButton"] span.p-button-label').should('have.text', 'Cancelar');
    
    
})

it.skip('6 - Gerenciar tarefas de produtividade / Pesquisar com Filtro', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
        cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/tarefa"] span.font-medium').click();
    cy.get('div.justify-between').click();
    cy.get('button.relative').click();
    cy.get('h3').click();
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_id"]').should('have.text', 'Id');
    cy.get('div.grid').click();
    cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
    cy.get('div.grid').click();
    cy.get('label[for="field_ativo"]').should('have.text', 'Status');
    cy.get('div:nth-child(4) > div.flex').click();
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_atividade"]').should('have.text', 'Atividade');
    cy.get('div.flex.justify-end').click();
    cy.get('a.underline span').should('have.text', 'Limpar Todos');
    cy.get('div.grid').click();
    cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Criar novo Tarefa ');
    cy.get('[data-cy="id"]').click();
    cy.get('[data-cy="id"]').type('1');
  
    
})

it.skip('7 - Gerenciar tarefas de produtividade / Pesquisar com Filtro e Visualizar', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
      
      cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')

    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/tarefa"] span.font-medium').click();
    cy.get('div.justify-between').click();
 
    cy.get('button.relative').click();
    cy.get('h3').click();
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_id"]').should('have.text', 'Id');
    cy.get('div.grid').click();
    cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
    cy.get('div.grid').click();
    cy.get('label[for="field_ativo"]').should('have.text', 'Status');
    cy.get('div:nth-child(4) > div.flex').click();
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_atividade"]').should('have.text', 'Atividade');
    cy.get('div.flex.justify-end').click();
    cy.get('a.underline span').should('have.text', 'Limpar Todos');
    cy.get('div.grid').click();
    cy.get('[data-cy="id"]').click();
    cy.get('[data-cy="id"]').type('1');
    cy.get('button[pc220=""] span.p-button-label').click();
    cy.get('[data-cy="entityTable"] li[ptooltip="Visualizar"] span.msr').click();
})


it.skip('8 - Gerenciar tarefas de produtividade / Filtro utilizar o botão Limpar Todos', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
 
       cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
    //cy.get('#home-logged-message').click();
    //cy.get('#home-logged-message span.font-bold').should('have.text', 'Elvio Ferreira do Nascimento.');
   // cy.get('div.self-center').click();
    //cy.get('div.self-center').should('have.text', 'Estágio Probratorio');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/tarefa"] span.font-medium').click();
    cy.get('div.justify-between').click();
   // cy.get('[data-cy="TarefaHeading"] span').should('have.text', 'Tarefas');
    cy.get('button.relative').click();
    cy.get('h3').click();
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_id"]').should('have.text', 'Id');
    cy.get('div.grid').click();
    cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
    cy.get('div.grid').click();
    cy.get('label[for="field_ativo"]').should('have.text', 'Status');
    cy.get('div:nth-child(4) > div.flex').click();
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('label[for="field_atividade"]').should('have.text', 'Atividade');
    cy.get('div.flex.justify-end').click();
    cy.get('a.underline span').should('have.text', 'Limpar Todos');
    cy.get('div.grid').click();
    //cy.get('button[pc68=""] span.p-button-label').should('have.text', 'Aplicar');
    cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Criar novo Tarefa ');
    cy.get('[data-cy="id"]').click();
    cy.get('[data-cy="id"]').type('1');
    cy.get('[data-cy="descricao"]').click();
    cy.get('[data-cy="descricao"]').type('teste');
    cy.get('#field_ativo span.p-select-label').click();
    cy.get('#field_ativo_0').click();
    cy.get('[data-cy="atividade"] div.p-multiselect-label-container').click();
    cy.get('#field_atividades_0 span.ng-star-inserted').click();
    cy.get('div.grid').click();
    cy.get('a.underline span').click();
})

it.skip('9 - Gerenciar atividades de produtividade / Validação de Label', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
  
       cy.get('[data-cy="navbar"] span.ml-auto').click();
    cy.get('[data-cy="login"] span.font-medium').click();
    cy.wait(9000)
    cy.visit('https://avaliacaoestagioprobatorio.teste.svc.tjpe.jus.br/')
   // cy.get('#home-logged-message').click();
   // cy.get('#home-logged-message span.font-bold').should('have.text', 'Elvio Ferreira do Nascimento.');
   // cy.get('div.self-center').click();
  //  cy.get('div.self-center').should('have.text', 'Estágio Probratorio');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').should('have.text', 'Gerenciamento');
    cy.get('[data-cy="navbar"] li:nth-child(2) a.font-medium span.font-medium').should('have.text', 'Relatórios');
    cy.get('[data-cy="navbar"] li:nth-child(1) a.font-medium span.font-medium').click();
    cy.get('[data-cy="navbar"] a[href="/atividade"] span.font-medium').click();
    cy.get('div.justify-between').click();
    cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Criar novo Atividade ');
    cy.get('#entities th[jhisortby="id"] span.uppercase').should('have.text', 'Id');
    cy.get('#entities th[jhisortby="descricao"] span.uppercase').should('have.text', 'Descrição');
    cy.get('button.relative span.p-button-label').click();
    cy.get('div.bg-white.ng-star-inserted').click();
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('div.grid div:nth-child(1) div.flex').click();
    cy.get('label[for="field_id"]').should('have.text', 'Id');
    cy.get('div.grid').click();
    cy.get('label[for="field_descricao"]').should('have.text', 'Descrição');
    cy.get('div.flex.justify-end').click();
    cy.get('a.underline span').should('have.text', 'Limpar Todos');
    cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
    cy.get('[data-cy="AtividadeCreateUpdateHeading"]').click();
    cy.get('[data-cy="AtividadeCreateUpdateHeading"]').should('have.text', 'Criar ou editar Atividade');
    cy.get('label.inline-block').click();
    cy.get('label.inline-block').should('have.text', 'Descrição');
    cy.get('[data-cy="entityCreateCancelButton"] span.p-button-label').should('have.text', 'Cancelar');
    cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').should('have.text', 'Salvar');
})
})