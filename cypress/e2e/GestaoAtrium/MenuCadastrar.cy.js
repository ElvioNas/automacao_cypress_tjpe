describe('Sistema Atrium Gestão | Menu Cadastrar', () => {

   it( '1 - Comarcar | Validar Label', () => {

    //Comarca

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
   cy.get('[data-cy="ComarcaHeading"] > span')
    .should('contain.text', 'Comarcas')
    cy.get('.p-button-outlined')
     .should('contain.text', 'Filtros')
   cy.get('[data-cy="entityCreateButton"]')
    .should('contain.text', 'Criar nova Comarca')
   cy.get('[jhisortby="descricao"] > .flex > span')
     .should('contain.text', 'Descrição')
  cy.get('[jhisortby="entrancia.descricao"] > .flex > span')
   .should('contain.text', 'Entrância')
   cy.get('[jhisortby="ativo"] > .flex > span')
    .should('contain.text', 'Ativo')
    cy.get('tr > :nth-child(4) > .flex > span')
      .should('contain.text', 'Cidade')

   })

   // Tipo Unidade

    it('2 - Tipo Unidade | Validar Label', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
  
    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.get('[data-cy="TipoUnidadeHeading"] > span')
     .should('contain.text', 'Tipo Unidades')
    cy.get('.p-button-outlined > .p-button-label')
     .should('contain.text', 'Filtros')
    cy.get('[data-cy="entityCreateButton"] > .p-button-label')
     .should('contain.text', 'Criar novo Tipo Unidade')
    cy.get('[jhisortby="descricao"] > .flex > span')
      .should('contain.text', 'Descrição')
    cy.get('[jhisortby="grau"] > .flex > span')
    .should('contain.text', 'Grau')
    cy.wait(5000)

    })
    
    // Grupo Unidade

    it( '3 - Grupo Unidade | Validar Label', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get('[data-cy="GrupoUnidadeHeading"] > span')
     .should('contain.text', 'Grupo de Unidades')
    cy.get('.p-button-outlined > .p-button-label')
     .should('contain.text', 'Filtros')
    cy.get('[data-cy="entityCreateButton"] > .p-button-label')
     .should('contain.text', 'Criar Grupo Unidades')
    cy.get('.w-80 > .flex > span')
    .should('contain.text', 'Descrição')
    cy.get('.p-datatable-thead > tr > :nth-child(2)')
      .should('contain.text', 'Ações')
     cy.wait(5000)

    })
    // Unidade Judicial

      it( '4 - Unidade Judicial | Validar Label', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
    cy.get('[data-cy="UnidadeJudicialHeading"] > span')
     .should('contain.text', 'Unidade Judicial')
    cy.get('.p-button-outlined > .p-button-label')
     .should('contain.text', 'Filtros')
    cy.get('[data-cy="entityCreateButton"] > .p-button-label')
     .should('contain.text', 'Criar Unidade Judicial')
    cy.get('[jhisortby="nome"] > .flex > span')
     .should('contain.text', 'Descrição Unidade Judicial')
    cy.get('[jhisortby="comarca.descricao"] > .flex > span')
     .should('contain.text', 'Comarca')
    cy.get('[jhisortby="grupoUnidade.descricao"] > .flex > span')
     .should('contain.text', 'Competência')
    cy.get('[jhisortby="tipoUnidade.descricao"] > .flex > span')
     .should('contain.text', 'Tipo Unidade')
    cy.get('.p-datatable-thead > tr > :nth-child(5)')
      .should('contain.text', 'Ações')
     cy.wait(5000)

      })

    // Feriado

      it( '5 - Feriado | Validar Label', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle > .font-medium').click()
    cy.get('[data-cy="FeriadoHeading"] > span')
    .should('contain.text', 'Feriados')
    cy.get('#filtroButton > .p-button-label')
     .should('contain.text', 'Filtros')
    cy.get('[data-cy="clonarFeriados"] > .p-button-label')
    .should('contain.text', 'Clonar Feriados')
    cy.get('[data-cy="entityCreateButton"] > .p-button-label')
    .should('contain.text', 'Criar novo Feriado')
    cy.get('[jhisortby="dataFeriado"] > .flex > span')
    .should('contain.text', 'Data Feriado')
    cy.get('[jhisortby="dataFixa"] > .flex > span')
     .should('contain.text', 'Data Fixa')
    cy.get('[jhisortby="esfera"] > .flex > span')
     .should('contain.text', 'Esfera')
    cy.get('[jhisortby="cidadeId"] > .flex > span')
    .should('contain.text', 'Cidade')
     cy.wait(5000)

      })

   //Manter Cadastro Eventos

     it( '6 - Manter Cadastro Eventos | Validar Label', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    //cy.get('.open > .dropdown-menu > :nth-child(6 > .dropdown-toggle > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(6) > .dropdown-toggle').click()
    cy.get('[data-cy="TipoEventoHeading"] > span')
     .should('contain.text', 'Manter Eventos')
    cy.get('.p-button-outlined > .p-button-label')
      .should('contain.text', 'Filtro')
    cy.get('[data-cy="entityCreateButton"] > .p-button-label')
     .should('contain.text', 'Criar novo Tipo Evento')
    cy.get('[jhisortby="descricao"] > .flex > span')
     .should('contain.text', 'Descrição Evento')
    cy.get('[jhisortby="grupoTipoEvento.descricao"] > .flex > span')
     .should('contain.text', 'Grupo Evento')
    cy.get('[jhisortby="grau"] > .flex > span')
     .should('contain.text', 'Grau Tipo')
    cy.get('.p-datatable-thead > tr > [style="width: 14%;"]')
     .should('contain.text', 'Ações')

     })

    
    //Magistrado

      it( '7 - Magistrado | Validar Label', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(7) > .dropdown-toggle > .font-medium').click()
    cy.get('[data-cy="MagistradoInfoHeading"] > span')
      .should('contain.text', 'Magistrado')
    cy.get('.p-button-outlined > .p-button-label')
     .should('contain.text', 'Filtro')
    cy.get('[data-cy="entityCreateButton"] > .p-button-label')
     .should('contain.text', 'Criar novo Magistrado')
    cy.get('[jhisortby="matricula"] > .flex > span')
      .should('contain.text', 'Matrícula')
    cy.get('[jhisortby="nome"] > .flex > span')
        .should('contain.text', 'Nome')
    cy.get('.p-datatable-thead > tr > :nth-child(3)')
      .should('contain.text', 'Ações')

    })


    it( '8 - Comarca| Validar Filtros', () => {

  //Comarca validar filtros

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle').click()
   cy.wait(2000)
   cy.get('.p-button-outlined').click()
   cy.get('h4')
     .should('contain.text', 'Busca por filtros')
   cy.get(':nth-child(1) > .flex > .mb-2')
     .should('contain.text', 'Comarca')
   cy.get(':nth-child(2) > .flex > .mb-2')
     .should('contain.text', 'Ativo')
   cy.get('[aria-labelledby="SIM"] > .p-button-label')
    .should('contain.text', 'SIM')
   cy.get('[aria-labelledby="NÃO"] > .p-button-label')
    .should('contain.text', 'NÃO')
   cy.get('.flex > .text-primary > span')
    .should('contain.text', 'Limpar Todos')
   cy.get('.justify-content-end > .flex > .p-component > .p-button-label')
    .should('contain.text', 'Aplicar')
    cy.get('[data-cy="descricao"]').type( 'Recife')
    cy.get('[aria-labelledby="SIM"]').click()
    cy.get('.justify-content-end > .flex > .p-component').click()
    cy.get('[aria-pressed="false"]').click()
    cy.get('.justify-content-end > .flex > .p-component').click()
    cy.wait(3000)

})

it( '9 - Tipo Unidade | Validar Filtros', () => {

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle').click()
    cy.wait(2000)
    cy.get('.p-button-outlined').click()
    cy.get('[data-cy="TipoUnidadeHeading"] > span')
          .should('contain.text', 'Tipo Unidades')
    cy.get('h4')
     .should('contain.text', 'Busca por filtros')
    cy.get('.mb-2')
     .should('contain.text', 'Descrição')
    cy.get('.flex > .text-primary > span')
     .should('contain.text', 'Limpar Todos')
    cy.get('.justify-content-end > .flex > .p-component > .p-button-label')
     .should('contain.text', 'Aplicar')
    cy.get('[data-cy="descricao"]').type('Diretoria')
    cy.get('.justify-content-end > .flex > .p-component').click()
    cy.wait(3000)



})



it( '10 - Grupo Unidade | Validar Filtros', () => {

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle').click()
    cy.wait(2000)
    cy.get('[data-cy="GrupoUnidadeHeading"] > span')
     .should('contain.text', 'Grupo de Unidades')
    cy.get('.p-button-outlined').click()
    cy.get('h4')
    .should('contain.text', 'Busca por filtros')
    cy.get('.mb-2')
     .should('contain.text', 'Grupo de Unidade')
    cy.get('.col-12 > .flex')
     .should('contain.text', 'Limpar Todos')
    cy.get('.col-12 > .flex > .p-component')
     .should('contain.text', 'Aplicar')
    cy.get('[data-cy="descricao"]').type('JUIZADO ESPECIAL DO TORCEDOR')
    cy.get('.col-12 > .flex > .p-component').click()
     cy.wait(3000)

})


it( '11 - Unidade Judicial | Validar Filtros', () => {

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

 cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
    cy.get('.p-button-outlined').click()
    cy.get('h4')
     .should('contain.text', 'Busca por filtros')
    cy.get('.formgrid > :nth-child(1) > .flex > .inline-block')
     .should('contain.text', 'Comarca')
    cy.get(':nth-child(3) > .flex > .inline-block')
     .should('contain.text', 'Grupo Unidade')
    cy.get(':nth-child(2) > .flex > .mb-2')
     .should('contain.text', 'Unidade Judicial')
    cy.get(':nth-child(4) > .flex > .mb-2')
     .should('contain.text', 'Código CNJ')
    cy.get('.text-primary > span')
     .should('contain.text', 'Limpar Todos')
    cy.get('.justify-content-end > .flex > .p-component')
     .should('contain.text', 'Aplicar')
    cy.get('[data-cy="comarca"] > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
    cy.get(':nth-child(1) > .p-ripple > .flex > div').click()
    cy.get('.justify-content-end > .flex > .p-component').click()
     cy.wait(3000)

})


it( '12 - Feriado | Validar Filtros', () => {

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()
    cy.wait(2000)
    cy.get('#filtroButton').click()
    cy.get('h4')
     .should('contain.text', 'Busca por filtros')
    cy.get(':nth-child(1) > .flex > .mb-2')
     .should('contain.text', 'Descrição')
    cy.get(':nth-child(2) > .flex > .inline-block')
     .should('contain.text', 'Esfera')
    cy.get(':nth-child(3) > .flex > .inline-block')
     .should('contain.text', 'Cidade')
    cy.get(':nth-child(4) > .flex > .mb-2')
     .should('contain.text', 'Data Feriado Inicial')
    cy.get(':nth-child(5) > .flex > .mb-2')
     .should('contain.text', 'Data Feriado Final')
    cy.get(':nth-child(6) > .flex > .mb-2')
     .should('contain.text', 'Data Fixa')
    cy.get('[aria-labelledby="SIM"]')
     .should('contain.text', 'SIM')
    cy.get('[aria-labelledby="NÃO"]')
     .should('contain.text', 'NÃO')
    cy.get('#Limpar_Todos > span')
     .should('contain.text', 'Limpar Todos')
    cy.get('.col-12 > .flex > .p-component > .p-button-label')
     .should('contain.text', 'Aplicar')
    cy.get('[data-cy="descricao"]').type('Dia de Reis')
    cy.get('[aria-labelledby="SIM"]').click()
    cy.get('.col-12 > .flex > .p-component').click()
    cy.get('[aria-pressed="false"]').click()
    cy.get('.col-12 > .flex > .p-component').click()
      cy.wait(3000)

})

//Manter Cadastro Eventos validar filtros

it( '13 - Manter Cadastro Eventos | Validar Filtros', () => {

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
      cy.get('.open > .dropdown-menu > :nth-child(6) > .dropdown-toggle').click()
      cy.wait(2000)
      cy.get('.p-button-outlined').click()
      cy.get('h4')
       .should('contain.text', 'Busca por filtros')
      cy.contains('label', 'Evento')
       .should('contain.text', 'Evento')
      cy.get('.pr-6 > .flex > .mb-2')
       .should('contain.text', 'Ativo')
      cy.get(':nth-child(3) > .flex > .mb-2')
      .should('contain.text', 'Grau Tipo')
      cy.get('[aria-labelledby="SIM"] > .p-button-label')
       .should('contain.text', 'SIM')
      cy.get('[aria-labelledby="NÃO"]')
       .should('contain.text', 'NÃO')
      cy.get('[aria-labelledby="1º Grau"] > .p-button-label')
      .should('contain.text', '1')
      cy.get('[aria-labelledby="2º Grau"] > .p-button-label')
       .should('contain.text', '2')
      cy.get('[data-cy="descricao"]').type('Promoção')
      cy.get('[aria-labelledby="SIM"]').click()
      cy.get('.justify-content-end > .flex > .p-component').click()
      cy.get('[aria-labelledby="1º Grau"]').click()
      cy.get('.justify-content-end > .flex > .p-component').click()
      cy.get('[data-cy="grau"] > .p-selectbutton > .p-highlight').click()
      cy.get('[data-cy="ativo"] > .p-selectbutton > [aria-pressed="false"]').click()
      cy.get('[data-cy="grau"] > .p-selectbutton > [aria-pressed="false"]').click()
      cy.get('.justify-content-end > .flex > .p-component').click()

})

  //Magistrado validar filtros

  it( '14 - Magistrado | Validar Filtros', () => {

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

       cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
       cy.get(':nth-child(7) > .dropdown-toggle').click()
       cy.wait(2000)
       cy.get('.p-button-outlined').click()
       cy.get('h4')
        .should('contain.text', 'Busca por filtros')
       cy.get('.mb-2')
        .should('contain.text', 'Magistrado(a)')
       cy.get('.text-primary > span')
       .should('contain.text', 'Limpar Todos')
       cy.get('.justify-content-end > .flex > .p-component')
        .should('contain.text', 'Aplicar')
      cy.get('[data-cy="nome"]').type('ABDON MAXIMO NETO')
      cy.get('.justify-content-end > .flex > .p-component').click()
})



   it( '15 - Comarca | Criar Comarca', () => {

    //Comarca | Criar Comarca

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
   cy.get('[data-cy="ComarcaHeading"] > span')
    .should('contain.text', 'Comarcas')
   cy.get('[data-cy="entityCreateButton"]').click()
   cy.get('[data-cy="descricao"]').type('Nova Olinda')
   cy.get('.p-dropdown-trigger').click()
   cy.get(':nth-child(1) > .p-ripple').click()
 //  cy.get('#p-highlighted-option').click()
   cy.get('.p-multiselect-trigger').click()
   cy.get(':nth-child(1) > .p-ripple > .p-checkbox > .p-checkbox-box').click()
   cy.get('.p-multiselect-label').click()
   cy.get('.p-inputswitch-slider').click()
   cy.get('[data-cy="entityCreateSaveButton"]').click()
   cy.get('.p-toast-message-content')
    .should('contain.text', 'Sucesso')
     cy.wait(2000)

   })


   it( '16 - Tipo Unidade | Criar novo Tipo Unidade', () => {

   //Tipo Unidade | Criar novo Tipo Unidade


   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.wait(2000)

 //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 //cy.get(':nth-child(1) > :nth-child(1) > .nav-bar-item > .pi-angle-down').click()
 // cy.wait(2000)
 
  cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle').click()

  

// cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
 cy.get('[data-cy="entityCreateButton"]').click()
 cy.get('[data-cy="descricao"]').type('TREM DAS OITO') //Mudar o nome da descrição, esse cenário quando cria o primeiro apresenta erro
 cy.get('.p-dropdown-trigger').click()
 cy.wait(1000)
 cy.get(':nth-child(1) > .p-ripple').click()
 cy.get('[data-cy="entityCreateSaveButton"]').click()
   cy.get('.p-toast-message-content')
   // .should('contain.text', 'Sucesso')
    cy.wait(2000)
   // cy.get('.p-ripple').click()
   cy.get('.p-toast-icon-close-icon').click()
      cy.wait(2000)

    

})



   it( '17 - Grupo Unidade | Criar Grupo de Unidade', () => {

//Grupo Unidade | Criar Grupo de Unidade
cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.wait(2000)

 //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
 cy.get('[data-cy="entityCreateButton"]').click()
 cy.get('[data-cy="descricao"]').type('RIO GRAND') //Mudar o nome da descrição, esse cenário quando cria o primeiro apresenta erro
 cy.get('[data-cy="entityCreateSaveButton"]').click()
   //cy.get('.p-toast-message-content')
   // .should('contain.text', 'Sucesso')
 cy.get('[data-cy="entityConfirmDeleteButton"]').click()

})

it( '18 - Unidade Judicial | Criar Unidade Judicial', () => {
//Unidade Judicial | Criar Unidade Judicial

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

// cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle').click()
 cy.get('[data-cy="entityCreateButton"]').click()
 cy.get('[data-cy="nome"]').type('FLUMINENS')//Mudar o nome da descrição, esse cenário quando cria o primeiro apresenta erro
 cy.get('[data-cy="codigoCNJ"]').type('202525')
 cy.get('[data-cy="entityCreateSaveButton"]').click()
 cy.get('[data-cy="entityConfirmDeleteButton"]').click()
 cy.wait(3000)  

})

it( '19 - Feriado | Criar Novo Feriado', () => {

//Feriado | Criar Novo Feriado

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

//cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()
 cy.get('[data-cy="entityCreateButton"]').click()
 cy.get('[data-cy="descricao"]').type('SANTA MÃE DE DEU')//Mudar o nome da descrição, esse cenário quando cria o primeiro apresenta erro
 cy.get('.w-full > .p-element').click()
 cy.get('.w-full > .p-inputtext').type('01122000')
 cy.get('[data-cy="esfera"] > .p-dropdown > .p-dropdown-trigger').click()
 //cy.get('#pr_id_6_list > :nth-child(1) > .p-ripple').click()
 cy.get('#pr_id_7_list > :nth-child(1) > .p-ripple').click()
 cy.get('[data-cy="entityCreateSaveButton"]').click()
 // cy.get('.p-toast-message-content')
  //  .should('contain.text', 'Sucesso')

  cy.get('.p-toast-message-icon').click()

})



it( '20 - Manter Cadastro Eventos | Criar', () => {

//Manter Cadastro Eventos | Criar

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()


//cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(6) > .dropdown-toggle').click()
 cy.get('[data-cy="entityCreateButton"]').click()
 cy.get('[data-cy="descricao"]').type('RETORNADO') //Mudar o nome da descrição, esse cenário quando cria o primeiro apresenta erro
 cy.get('[data-cy="grupoTipoEvento"] > .p-dropdown > .p-dropdown-trigger').click()
 cy.get(':nth-child(1) > .p-ripple').click()
 cy.get('[data-cy="grau"] > .p-dropdown > .p-dropdown-trigger').click()
 cy.get('#p-highlighted-option').click()
 cy.get('[data-cy="entityCreateSaveButton"]').click()
   cy.get('.p-toast-message-content')
     .should('contain.text', 'Sucesso')
     cy.wait(5000)

})

it( '21 - Magistrado | Criar Novo Magistrado', () => {

//Magistrado | Criar Novo Magistrado
cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(7) > .dropdown-toggle').click()

cy.get('[data-cy="entityCreateButton"]').click()

})


  it( '22 - Comarca | Visualizar', () => {

    //Comarca | Visualizar

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
   cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Visualizar"] > .flex > .pi').click()
   cy.get('[data-cy="comarcaDetailsHeading"] > span')
   .should('contain.text', 'Comarca')
})

it( '23 - Comarca | Voltar', () => {

    //Comarca | Voltar

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
   cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Visualizar"] > .flex > .pi').click()
   cy.get('[data-cy="comarcaDetailsHeading"] > span')
   .should('contain.text', 'Comarca')
   cy.get('[data-cy="entityDetailsBackButton"]').click()

})

it( '24 - Comarca | Editar', () => {

    //Comarca | Editar

 cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
   cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Editar"] > .flex > .pi').click()
   cy.get('[data-cy="ComarcaCreateUpdateHeading"]')
    .should('contain.text', 'Criar ou editar Comarca')
    cy.get('.p-inputswitch-slider').click()
    cy.get('[data-cy="entityCreateSaveButton"]').click()
  
})

 it('25 - Tipo Unidade | Visualizar', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
  
    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Visualizar"] > .flex > .pi').click()
})

it('26 - Tipo Unidade | Voltar', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
  
    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Visualizar"] > .flex > .pi').click()
    cy.get('[data-cy="entityDetailsBackButton"]').click()
})

 it('27 - Tipo Unidade | Editar', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
  
    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Editar"] > .flex > .pi').click()
    cy.get('.p-dropdown-trigger').click()
    cy.get(':nth-child(2) > .p-ripple').click()
    cy.get('[data-cy="entityCreateSaveButton"] > .w-full').click()

})

 it('28 - Tipo Unidade | Excluir', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
  
    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Excluir"] > .flex > .pi').click()
    cy.get('[data-cy="entityConfirmDeleteButton"]').click()
    cy.wait(5000)//Mensagem de orientação


})

  it( '29 - Grupo Unidade | Editar', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityEditButton"] > .p-ripple').click()
    cy.get('[data-cy="descricao"]').clear()
    cy.get('[data-cy="descricao"]').type('Teste')
    cy.get('[data-cy="entityCreateSaveButton"]').click()
    cy.get('[data-cy="entityConfirmDeleteButton"]').click()


})

it( '30 - Grupo Unidade | Excluir', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityDeleteButton"] > .p-ripple').click()
    cy.get('[data-cy="entityConfirmDeleteButton"]').click()

})

it( '31 - Grupo Unidade | Visualizar', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityDetailsButton"] > .p-ripple').click()

})

it( '32 - Grupo Unidade | Voltar', () => {

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

    cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityDetailsButton"] > .p-ripple').click()
    cy.get('[data-cy="entityDetailsBackButton"]').click()

})

it( '33 - Unidade Judicial | Editar', () => {
//Unidade Judicial | Criar Unidade Judicial

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

// cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle').click()
 cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityEditButton"] > .p-ripple').click()
 cy.get('.p-inputswitch-slider').click()
 cy.get('[data-cy="entityCreateSaveButton"]').click()
 cy.get('[data-cy="entityConfirmDeleteButton"]').click()


})

it( '34 - Unidade Judicial | Excluir', () => {
//Unidade Judicial | Criar Unidade Judicial

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

// cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle').click()
 cy.get(':nth-child(2) > .text-end > .btn-group > [data-cy="entityDeleteButton"] > .p-ripple').click()
 cy.get('[data-cy="entityConfirmDeleteButton"]').click()
 
})
it( '35 - Unidade Judicial | Visualizar', () => {
//Unidade Judicial | Criar Unidade Judicial

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

// cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle').click()
 cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityDetailsButton"] > .p-ripple').click()
 
})
it( '36 - Unidade Judicial | Voltar', () => {
//Unidade Judicial | Criar Unidade Judicial

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()

// cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
 cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle').click()
 cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityDetailsButton"] > .p-ripple').click()
 cy.wait(2000)
 cy.get('[data-cy="entityDetailsBackButton"]').click()
 
})

it( '37 - Feriado | Visualizar', () => {

//Feriado | Criar Novo Feriado

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()
   cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Visualizar"] > .flex').click()

})


it( '38 - Feriado | Voltar', () => {

//Feriado | Criar Novo Feriado

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()
   cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Visualizar"] > .flex').click()
   cy.wait(2000)
   cy.get('[data-cy="entityDetailsBackButton"]').click()

})

it( '39 - Feriado | Editar', () => {

//Feriado | Criar Novo Feriado

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()
  
   cy.get(':nth-child(1) > .text-right > .relative > .list-none > [ptooltip="Editar"] > .flex').click()

   cy.wait(2000)
   cy.get('[data-cy="cidade"] > .p-dropdown > .p-dropdown-trigger').click()
   cy.get(':nth-child(1) > .p-ripple > .flex > div').click()

   cy.get('.p-inputswitch-slider').click()
   cy.get('[data-cy="entityCreateSaveButton"]').click()



})

it( '40 - Feriado | Excluir', () => {

//Feriado | Criar Novo Feriado

cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(12000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()

   cy.get(':nth-child(3) > .text-right > .relative > .list-none > [ptooltip="Excluir"] > .flex').click()

   cy.wait(2000)
   cy.get('[data-cy="entityConfirmDeleteButton"]').click()
   
})


})