describe('Sistema Atrium Gestão | Menu Gerenciar', () => {

   it.skip( '1 - Histórico de Magistrado do 1º Grau | Validar Label', () => {

    //Histórico de Magistrado do 1º Grau

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
   cy.wait(2000)
   //cy.get('.ng-tns-c56-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
  //cy.get('.ng-tns-c56-11.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  //cy.get('.ng-tns-c56-12.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  //cy.get('.ng-tns-c56-13.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   cy.get('[data-cy="HistoricoMagistradoHeading"] > span')
    .should('contain.text', 'Histórico de Magistrados')
   cy.get('.p-overlay-badge')
     .should('contain.text', 'Filtros')
   cy.get('.p-button-outlined.mb-4 > .p-button-label')   
   cy.get('[data-cy="entityCreateButton"] > .p-button-label')
    .should('contain.text', 'Adicionar Histórico')
   cy.get('h4')
  // cy.contains('label', 'Busca por filtros')
    .should('contain.text', 'Busca por filtros')
     //cy.get('.lg\:col-6 > .flex > .mb-2')
   cy.contains('label', 'Magistrado')
    .should('contain.text', 'Magistrado')
   cy.get(':nth-child(4) > .flex > .mb-2')
    .should('contain.text', 'Comarca')
   //cy.get(':nth-child(6) > .flex > .mb-2')
   cy.contains('label', 'Competência')
    .should('contain.text', 'Competência')
   cy.get(':nth-child(2) > .flex > .mb-2')
    .should('contain.text', 'Data Inicial')
   cy.get(':nth-child(5) > .flex > .mb-2')
    .should('contain.text', 'Tipo Evento')
   cy.get(':nth-child(7) > .flex > .mb-2')
    .should('contain.text', 'Unidade Judicial')
   cy.get(':nth-child(3) > .flex > .mb-2')
    .should('contain.text', 'Data Final')
   cy.get('.flex > .text-primary > span')
    .should('contain.text', 'Limpar Todos')
   cy.get('.justify-content-end > .flex > .p-component')
    .should('contain.text', 'Aplicar')
   cy.wait(5000)
   })

   it.skip( '2 - Histórico de Magistrado do 2º Grau | Validar Label', () => {
   // Histórico de Magistrado do 2º Grau
   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   cy.wait(2000)

   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
   cy.get('[data-cy="HistoricoMagistradoHeading"] > span')
    .should('contain.text', 'Histórico')
    cy.get('h4')
    .should('contain.text', 'Busca por filtros')
   //cy.get('.lg\:col-6 > .flex > .mb-2')
   cy.contains('label', 'Magistrado')
    .should('contain.text', 'Magistrado')
   cy.get(':nth-child(4) > .flex > .mb-2')
    .should('contain.text', 'Tipo de Evento')
   cy.get(':nth-child(2) > .flex > .mb-2')
    .should('contain.text', 'Data Inicial')
   cy.get(':nth-child(5) > .flex > .mb-2')
    .should('contain.text', 'Órgão Julgador')
   cy.get(':nth-child(3) > .flex > .mb-2')
    .should('contain.text', 'Data Final')
   cy.get('.flex > .text-primary > span')
    .should('contain.text', 'Limpar Todos')
   cy.get('.justify-content-end > .flex > .p-component > .p-button-label')
    .should('contain.text', 'Aplicar')
   cy.wait(5000)

   })

    
  it.skip( '3 - Lista de Antiguidade | Validar Label', () => {
      //Lista de Antiguidade

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   cy.wait(2000)
  
    cy.get(':nth-child(2) > .nav-bar-item > .pi-clone').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle').click()
    cy.get('[data-cy="ListaAntiguidadeHeading"] > span')
     .should('contain.text', 'Lista de Antiguidade')
     cy.get('.flex > .p-component')
     .should('contain.text', 'Filtros')
    cy.get('[data-cy="entityCreateButton"]')
     .should('contain.text', 'Adicionar Lista')
     cy.get('[jhisortby="id"] > .flex > span')
      .should('contain.text', 'Código')
     cy.get('[jhisortby="dataCriacao"] > .flex > span')
      .should('contain.text', 'Data')

    })


    it.skip( '4 - Histórico de magistrado do 1º Grau | Validar Filtro' , () => {

   //Histórico de magistrado do 1 Grau validar filtro

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
  // cy.get('.ng-tns-c56-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
  // cy.get('.ng-tns-c56-11.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-12.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-13.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   cy.get('.p-overlay-badge').click()
   cy.get('.p-overlay-badge').click()
   cy.get('[data-cy="magistrado"] > .w-full > .p-multiselect-trigger > .p-multiselect-trigger-icon').click()
   cy.get(':nth-child(1) > .p-ripple > .p-checkbox > .p-checkbox-box').click()
   cy.get('.justify-content-end > .flex > .p-component').click()
   cy.wait(3000)


    })


  it.skip( '5 - Histórico de magistrado do 2 Grau | Validar Filtro' , () => {

   //Histórico de magistrado do 2 Grau validar filtro

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)

   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()

  // cy.get('.ng-tns-c56-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
 //  cy.get('.ng-tns-c56-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
  // cy.get('.ng-tns-c56-11.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-12.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-13.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   cy.wait(3000)
   cy.contains('label', 'Magistrado')
    .should('contain.text', 'Magistrado')
   cy.get(':nth-child(2) > .flex > .mb-2')
    .should('contain.text', 'Data Inicial')
   cy.get(':nth-child(3) > .flex > .mb-2')
    .should('contain.text', 'Data Final')
   cy.get(':nth-child(4) > .flex > .mb-2')
    .should('contain.text', 'Tipo de Evento')
    cy.get(':nth-child(5) > .flex > .mb-2')
     .should('contain.text', 'Órgão Julgador')
   cy.get('[data-cy="magistrado"] > .w-full > .p-multiselect-trigger > .p-multiselect-trigger-icon').click()
   cy.get(':nth-child(1) > .p-ripple > .p-checkbox > .p-checkbox-box').click()
   cy.get('.justify-content-end > .flex > .p-component').click()

   })


  it.skip( '6 - Lista de Antiguidade | Validar Filtro' , () => {

   //Lista de Antiguidade

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

   cy.wait(3000)

   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
   cy.get('[data-cy="ListaAntiguidadeHeading"] > span')
    .should('contain.text', 'Lista de Antiguidade')
   cy.get('.flex > .p-component').click()
   cy.get('h4')
    .should('contain.text', 'Busca por filtros')
   cy.get(':nth-child(1) > .flex > .mb-2')
    .should('contain.text', 'Data')
   cy.get(':nth-child(2) > .flex > .mb-2')
    .should('contain.text', 'Sexo')
   cy.get(':nth-child(3) > .flex > .mb-2')
    .should('contain.text', 'Formato')
   cy.get('.text-primary > span')
    .should('contain.text', 'Limpar Todos')
   cy.get(':nth-child(4) > .flex > .p-button')
    .should('contain.text', 'Aplicar')
    cy.get('.flex > .p-component').click()


  })


  it.skip( '7 - Histórico de magistrado do 1º Grau | Adicionar', () => {
   // Atenção com esse cenário ele apresenta erro quando clica no botão salvar.
   //Histórico de magistrado do 1º Grau Adicionar

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
     cy.wait(2000)
  // cy.get('.ng-tns-c56-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   //cy.get('.ng-tns-c56-11.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-12.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-13.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   // cy.wait(2000)
   cy.get('[data-cy="entityCreateButton"]').click()
   cy.get('[data-cy="matricula"] > .p-dropdown > .p-dropdown-trigger').click()
   cy.get(':nth-child(1) > .p-ripple > .ng-star-inserted').click()
   cy.get('[data-cy="comarcaUnidadeJudicial"] > .p-dropdown > .p-dropdown-trigger').click()
   cy.wait(2000)
   cy.get('#pr_id_6_list > :nth-child(1) > .p-ripple').click()

     cy.wait(2000)
   cy.get('[data-cy="grupoUnidade"] > .p-dropdown > .p-dropdown-trigger').click()
     cy.wait(2000)
   cy.get('#pr_id_7_list > :nth-child(1) > .p-ripple').click()
     cy.wait(2000)
  
   cy.get('[data-cy="unidadeJudicial"] > .p-dropdown > .p-dropdown-trigger').click()
     cy.wait(2000)

     cy.get('#pr_id_8_list > :nth-child(1) > .p-ripple').click()

     /*
   cy.get('.p-element.ng-star-inserted > .p-ripple').click()
     cy.wait(2000)

     */
   cy.get('[data-cy="tipoEvento"] > .p-dropdown > .p-dropdown-trigger').click()
     cy.wait(2000)

     
   cy.get(':nth-child(1) > .p-ripple > .ng-star-inserted').click()
   cy.get('[data-cy="dataInicio"] > .w-full > .p-element').click()
   cy.get('.p-datepicker-today > .p-ripple').click()
   cy.get('[data-cy="dataTermino"] > .w-full > .p-element').click()
   cy.wait(2000)
   cy.get('.p-datepicker-today > .p-ripple').click()
   cy.get('[data-cy="observacao"]').type('Teste de sistema')
   cy.get('[data-cy="entityCreateSaveButton"]').click()
    cy.get('.p-toast-message-content')
     .should('contain.text', 'Sucesso')
     cy.wait(3000)

})

 it.skip( '8 - Histórico de magistrado do 2º Grau | Adicionar', () => {

//Histórico de magistrado do 2º Grau Adicionar
    cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()

   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
   cy.get('[data-cy="entityCreateButton"] > .p-button-label').click()
   cy.get('[data-cy="matricula"] > .p-dropdown > .p-dropdown-trigger').click()
   cy.get(':nth-child(1) > .p-ripple > .ng-star-inserted > .block').click()
   cy.get('[data-cy="tipoEvento"] > .p-dropdown > .p-dropdown-trigger').click()
   cy.get(':nth-child(1) > .p-ripple > .ng-star-inserted').click()
   cy.get('[data-cy="unidadeJudicial"] > .p-dropdown > .p-dropdown-trigger').click()
   cy.get(':nth-child(1) > .p-ripple > .ng-star-inserted').click()
   cy.wait(2000)
   cy.get('[data-cy="dataInicio"] > .w-full > .p-inputtext').type('0303202508000') //Alterar dados para execução
   cy.get('[data-cy="dataTermino"] > .w-full > .p-inputtext').type('0303202509000')//Alterar dados para execução
   cy.get('[data-cy="observacao"]').type('Teste de sistema')
   cy.wait(2000)
   cy.get('[data-cy="entityCreateSaveButton"]').click()
   cy.get('.p-toast-message-content')
    .should('contain.text', 'Sucesso')

   
 })

 it.skip( '9 - Lista de Antiguidade | Adicionar', () => {

  
   //Lista de Antiguidade | Adicionar

    cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
 
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
   cy.get('[data-cy="entityCreateButton"]').click()
   cy.get('.p-confirm-dialog-accept').click()
   cy.wait(4000)
   cy.get('.p-toast-message-content')
    .should('contain.text', 'Sucesso')

   })


   it.skip( '10 - Histórico de Magistrado do 1º Grau | Exportar', () => {

  
   //Atenção com esse cenário está apresentando erro

    cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
 
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
  

    //cy.get('.ng-tns-c56-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   ///cy.get('.ng-tns-c56-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   //cy.get('.ng-tns-c56-11.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-12.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-13.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   // cy.wait(2000)
     cy.get('.p-button-outlined.mb-4 > .p-button-label').click()

})

   it.skip( '11 - Histórico de Magistrado do 2º Grau | Exportar', () => {

  
   //Atenção com esse cenário está apresentando erro

    cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
 
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
   cy.get('.p-button-outlined.mb-4 > .p-button-label').click()
})

it.skip( '12 - Histórico de magistrado do 1º Grau | Filtro botão Limpar' , () => {

   //Histórico de magistrado do 1 Grau validar filtro

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
   //cy.get('.ng-tns-c56-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
  // cy.get('.ng-tns-c56-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   //cy.get('.ng-tns-c56-11.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-12.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-13.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   cy.get('.p-overlay-badge').click()
   cy.get('.p-overlay-badge').click()
   cy.get('[data-cy="magistrado"] > .w-full > .p-multiselect-trigger > .p-multiselect-trigger-icon').click()
   cy.get(':nth-child(1) > .p-ripple > .p-checkbox > .p-checkbox-box').click()
   cy.get('.justify-content-end > .flex > .p-component').click()
   cy.wait(3000)
   cy.get('.justify-content-end > .flex > .text-primary > span').click()


    })

    it.skip( '13 - Histórico de magistrado do 2 Grau | Filtro Botão Limpar' , () => {

   //Histórico de magistrado do 2 Grau validar filtro

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')
   //cy.get(':nth-child(1) > .nav-bar-item > .font-medium').click()
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)

   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
  // cy.wait(1000)

  // cy.get('.ng-tns-c56-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
  // cy.get('.ng-tns-c56-11.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-12.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple > .p-toast-icon-close-icon').click()
   //cy.get('.ng-tns-c56-13.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
   cy.wait(3000)
   cy.contains('label', 'Magistrado')
    .should('contain.text', 'Magistrado')
   cy.get(':nth-child(2) > .flex > .mb-2')
    .should('contain.text', 'Data Inicial')
   cy.get(':nth-child(3) > .flex > .mb-2')
    .should('contain.text', 'Data Final')
   cy.get(':nth-child(4) > .flex > .mb-2')
    .should('contain.text', 'Tipo de Evento')
    cy.get(':nth-child(5) > .flex > .mb-2')
     .should('contain.text', 'Órgão Julgador')
   cy.get('[data-cy="magistrado"] > .w-full > .p-multiselect-trigger > .p-multiselect-trigger-icon').click()
   cy.get(':nth-child(1) > .p-ripple > .p-checkbox > .p-checkbox-box').click()
   cy.get('.justify-content-end > .flex > .p-component').click()
   cy.get('.justify-content-end > .flex > .text-primary > span').click()

   })

   it.skip( '14 - Lista de Antiguidade | Filtro Botão Limpar' , () => {

   //Lista de Antiguidade

  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.break')
   .should('contain.text', 'Atrium Gestão')
   cy.get(':nth-child(1) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Cadastrar')
   cy.get(':nth-child(2) > .nav-bar-item > .font-medium')
   .should('contain.text', 'Gerenciar')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium')
    .should('contain.text', 'Administração')

   cy.wait(3000)

   cy.get(':nth-child(2) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
   cy.get('[data-cy="ListaAntiguidadeHeading"] > span')
    .should('contain.text', 'Lista de Antiguidade')
   cy.get('.flex > .p-component').click()
   cy.get('h4')
    .should('contain.text', 'Busca por filtros')
   cy.get(':nth-child(1) > .flex > .mb-2')
    .should('contain.text', 'Data')
   cy.get(':nth-child(2) > .flex > .mb-2')
    .should('contain.text', 'Sexo')
   cy.get(':nth-child(3) > .flex > .mb-2')
    .should('contain.text', 'Formato')
   cy.get('.text-primary > span')
    .should('contain.text', 'Limpar Todos')
   cy.get(':nth-child(4) > .flex > .p-button')
    .should('contain.text', 'Aplicar')
    cy.get('.w-full > .p-inputtext').click()
    cy.get(':nth-child(3) > :nth-child(3) > .p-ripple').click()
    cy.get('.text-primary > span').click() 


  })


})
