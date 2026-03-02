describe('Simap | Servidores', () => {

   it( '1 - Servidores | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/servidor"] span.font-medium').click();
   cy.get('[data-cy="ServidorHeading"] span').should('have.text', 'Servidores');
   cy.get('button.p-overlay-badge span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="entityDesableButton"] span.p-button-label').should('have.text', ' Ativar Selecionado(s) ');
   cy.get('[data-cy="entityEnableButton"]').should('have.text', '\n        \n         Desativar Selecionado(s) \n      ');
   cy.get('[data-cy="entityCreateButton"]').should('have.text', '\n        \n         Novo Servidor \n      ');
   cy.get('#entities th[jhisortby="nome"] span').should('have.text', 'Nome');
   cy.get('#entities th[jhisortby="nucleoDiretoria.diretoria.nome"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="nucleoDiretoria.nucleo.nome"] span').should('have.text', 'Núcleo');
   cy.get('#entities th[jhisortby="ativo"] span').should('have.text', 'Situação');
   cy.get('button.p-overlay-badge').click();
   cy.get('h3').should('have.text', 'Filtros de Pesquisa');
   cy.get('div:nth-child(1) > div.flex > label.inline-block').should('have.text', 'Nome ');
   cy.get('div:nth-child(2) > div.flex > label.inline-block').should('have.text', 'CPF ');
   cy.get('div:nth-child(3) > div.flex > label.inline-block').should('have.text', 'Matrícula ');
   cy.get('div:nth-child(4) label.inline-block').should('have.text', 'Competência ');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('label[for="field_nucleoDiretoriaIdnucleoIdin"]').should('have.text', 'Núcleo');
   cy.get('label[for="field_ativo"]').should('have.text', 'Apenas ativos');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').should('have.text', 'Pesquisar');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('[data-cy="ServidorCreateUpdateHeading"]').should('have.text', 'Criar ou editar Servidor');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria*');
   cy.get('label[for="field_nucleoDiretorianucleoIdin"]').should('have.text', 'Núcleo*');
   cy.get('label[for="field_nome"]').should('have.text', 'Nome*');
   cy.get('label[for="field_regimeTrabalho"]').should('have.text', 'Regime de Trabalho*');
   cy.get('label[for="field_cpf"]').should('have.text', 'CPF*');
   cy.get('label[for="field_peso"]').should('have.text', 'Peso*');
   cy.get('label[for="field_matricula"]').should('have.text', 'Matrícula');
   cy.get('jhi-servidor-competencias h4.mt-6').should('have.text', '\n          Competência(s)\n          0\n        ');
   cy.get('jhi-servidor-vara h4.mt-6').should('have.text', '\n          Vara(s) Preferencial (is)\n          0\n        ');
   cy.get('[data-cy="entityCreateCancelButton"]').should('have.text', '\n            \n              \n              Cancelar\n            \n          ');
   })

    it( '2 - Meus Processos | Pesquisar', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/servidor"] span.font-medium').click();
   
    
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('#field_nucleoDiretorianucleoIdin span.p-element').click();
   cy.get('#field_nucleoDiretorianucleoIdin_0').click();
   cy.get('[data-cy="nome"]').click();
   cy.get('[data-cy="nome"]').type('PEDRO PAULO NA TRIBUNA');
   cy.get('#field_regimeTrabalho span.p-element').click();
   cy.get('#field_regimeTrabalho_0').click();
   cy.get('[data-cy="cpf"] [name="cpf"]').click();
   cy.get('[data-cy="cpf"] [name="cpf"]').click();
   cy.get('[data-cy="cpf"] [name="cpf"]').clear();
   cy.get('[data-cy="cpf"] [name="cpf"]').type('645.644.600-72');
   cy.get('#locale-brasil').click();
   cy.get('#locale-brasil').click();
   cy.get('#locale-brasil').type('5.102.211.321,00');
   cy.get('#locale-brasil').clear();
   cy.get('#locale-brasil').type('1,00');
   cy.get('p-dropdown[name="diretoria"][styleclass="w-full rounded-r-none"] div.p-dropdown-trigger').click();
   cy.get('#field_diretoria_0 div.flex > div').click();
   cy.get('#field_vara div.p-dropdown-trigger').click();
   cy.get('#field_vara_0 div.flex > div').click();
   cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').click();
   cy.get('div.break-words').should('have.text', 'Servidor Com Esse CPF Já Existe!');
    })

     it( '3 - Servidores | Pesquisar Servidor', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(10000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   // cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
   
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/servidor"] span.font-medium').click();
   
   cy.get('button.p-overlay-badge').click();
   cy.get('[data-cy="nome"] [name="cpf"]').click();
   cy.get('[data-cy="nome"] [name="cpf"]').click();
   cy.get('[data-cy="nome"] [name="cpf"]').clear();
   cy.get('[data-cy="nome"] [name="cpf"]').type('645.644.600-72');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('[data-cy="entityTable"] td.font-bold').should('have.text', '\n                  PEDRO PAULO NA TRIBUNA\n                ');
     })
})