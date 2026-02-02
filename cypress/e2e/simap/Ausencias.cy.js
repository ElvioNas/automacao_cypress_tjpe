describe('Sismap | Ausências', () => {

   it.skip( '1 - Ausências | Validar Label', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   
   
     
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/ausencias"] span.font-medium').click();
   cy.get('[data-cy="AusenciasHeading"] span').should('have.text', 'Ausências');
   cy.get('button.p-overlay-badge span.p-button-label').should('have.text', 'Filtros');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').should('have.text', ' Nova Ausência ');
   cy.get('#entities th[jhisortby="servidor.nucleoDiretoria.diretoria.nome"] span').should('have.text', 'Diretoria');
   cy.get('#entities th[jhisortby="servidor.nucleoDiretoria.nucleo.nome"] span').should('have.text', 'Núcleo');
   cy.get('#entities th[jhisortby="servidor.nome"] span').should('have.text', 'Nome Servidor');
   cy.get('#entities th[jhisortby="tipoAusencia.descricao"] span').should('have.text', 'Tipo da Ausência');
   cy.get('#entities th[jhisortby="dataInicial"] span').should('have.text', 'Início');
   cy.get('#entities th[jhisortby="dataFinal"] span').should('have.text', 'Fim');
   cy.get('i.ml-1').click();
   cy.get('h3').should('have.text', 'Filtros de Pesquisa');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('label[for="field_nucleoDiretoriaIdnucleoIdin"]').should('have.text', 'Núcleo');
   cy.get('label[for="input_filter_servidor"]').should('have.text', 'Servidor');
   cy.get('label[for="field_dataInicial"]').should('have.text', 'Data Inicial');
   cy.get('label[for="field_dataFinal"]').should('have.text', 'Data Final');
   cy.get('label[for="field_tipoAusencia"]').should('have.text', 'Tipo Ausência');
   cy.get('a.underline span').should('have.text', 'Limpar Todos');
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').should('have.text', 'Pesquisar');
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('[data-cy="AusenciasCreateUpdateHeading"]').should('have.text', 'Criar ou editar Ausência');
   cy.get('label[for="input_filter_servidor"]').should('have.text', 'Nome Servidor');
   cy.get('label[for="field_cpf"]').should('have.text', 'CPF');
   cy.get('label[for="field_diretoria"]').should('have.text', 'Diretoria');
   cy.get('label[for="field_dataInicial"]').should('have.text', 'Data Inicial');
   cy.get('label[for="field_dataFinal"]').should('have.text', 'Data Final');
   cy.get('label[for="field_qtd"]').should('have.text', 'Dias');
   cy.get('label[for="field_tipoAusencia"]').should('have.text', 'Tipo da Ausência');
   cy.get('label[for="field_observacao"]').should('have.text', 'Observação');
   cy.get('[data-cy="entityCreateCancelButton"] span.p-button-label').should('have.text', 'Cancelar');
   })

   it.skip( '2 - Ausências | Criar Ausência', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/ausencias"] span.font-medium').click();
    
   cy.get('[data-cy="entityCreateButton"] span.p-button-label').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').type('02112357417');
   cy.get('#input_filter_servidor_0 div.flex > div:nth-child(1)').click();
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   
   cy.get('[data-cy="dataInicial"] input.p-element').click();
   cy.get('[data-cy="dataInicial"] input.p-element').type('04/01/2026');
   cy.get('[data-cy="dataFinal"] input.p-element').click();
   cy.get('[data-cy="dataFinal"] input.p-element').type('05/01/2026');
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="observacao"]').type('teste de sistema');
   cy.get('#field_tipoAusencia span.p-element').click();
   cy.get('#field_tipoAusencia_0 span.ng-star-inserted').click();
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="entityCreateSaveButton"] span.w-full').click();
   cy.get('div.break-words').should('have.text', 'Nova Ausência Salva com sucesso!');
   })

    it.skip( '3 - Ausências | Pesquisar Ausência', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/ausencias"] span.font-medium').click();
    
   cy.get('button.p-overlay-badge').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').type('02112357417');
   cy.get('#input_filter_servidor_0 div.flex > div:nth-child(1)').click();
   cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
    })

     it.skip( '4 - Ausências | Editar Ausência', () => {
   
   //Métricas
   
   cy.viewport(1920, 1080);
   cy.visit('https://simap.teste.svc.tjpe.jus.br/');
   cy.wait(12000)
   cy.visit('https://simap.teste.svc.tjpe.jus.br/')
   cy.wait(1000)
   
   cy.get('[data-cy="navbar"] i.lg\\:ml-3').click();
   cy.get('[data-cy="navbar"] a[routerlink="/ausencias"] span.font-medium').click();
    
   cy.get('button.p-overlay-badge').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').click();
   cy.get('[data-cy="servidor"] [name="servidor"]').type('02112357417');
   cy.get('#input_filter_servidor_0 div.flex > div:nth-child(1)').click();
   //cy.get('button.p-button-sm.p-button-rounded span.p-button-label').click();
   cy.get('tr[data-cy="entityTable"]:nth-of-type(1) i.pi-pencil').click();
   cy.get('#field_tipoAusencia span.p-element').click();
   cy.get('#field_tipoAusencia_2').click();
   cy.get('[data-cy="observacao"]').click();
   cy.get('[data-cy="observacao"]').type(' editar');
   cy.get('[data-cy="entityCreateSaveButton"] span.p-button-label').click();
   cy.get('div.break-words').should('have.text', 'Ausência Alterada com sucesso!');
     })
})