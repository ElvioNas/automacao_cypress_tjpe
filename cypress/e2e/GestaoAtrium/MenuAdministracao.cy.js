describe('Sistema Atrium Gestão | Menu Administração', () => {

   it( '1 - Métricas | Validar Label', () => {

   //Métricas

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle').click()
   cy.get('[data-cy="metricsPageHeading"]')
   .should('contain.text', 'Métricas da aplicação')
   cy.get('.surface-card > .flex > .p-element')
    .should('contain.text', 'Atualizar')
   cy.get('jhi-jvm-memory.col-12 > h4')
      .should('contain.text', 'Memória')
    cy.get('jhi-jvm-threads.col-12 > h4')
    .should('contain.text', 'Threads')
   cy.get('jhi-metrics-system.col-12 > h4')
    .should('contain.text', 'System')
   cy.wait(5000)

   })

   it( '2 - Estado do Sistema | Validar Label', () => {

    //Estado do Sistema

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')

    cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.get('[data-cy="healthPageHeading"]')
    .should('contain.text', 'Estado do Sistema')
    cy.get('.surface-card > .flex > .p-element')
     .should('contain.text', 'Atualizar')
    cy.get('.text-left')
     .should('contain.text', 'Nome do Serviço')
    cy.get('.p-datatable-thead > .ng-star-inserted > :nth-child(2)')
     .should('contain.text', 'Estado')
    cy.get('.ng-star-inserted > :nth-child(3)')
      .should('contain.text', 'Detalhes')

   })

   

   it( '3 - Configuração | Validar Label', () => {

  //Configuração 

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')

      //cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
      cy.get(':nth-child(3) > .nav-bar-item > .pi-angle-down').click()
    //  cy.get(':nth-child(3) > .nav-bar-item > .pi-angle-down').click()
      cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
      //cy.get('[data-cy="configurationPageHeading"]')
     // cy.contains('label', 'Configuração')
      //.should('contain.text', 'Configuração')
      cy.get('#spring-configuration')
       .should('contain.text', 'Spring configuration')
      cy.get('.surface-card > :nth-child(2)')
       .should('contain.text', 'Filtro (por prefixo)')
      cy.get('.w-40 > span')
       .should('contain.text', 'Prefixo')
      cy.get('.w-60 > span')
       .should('contain.text', 'Propriedades')
   })

   

    it( '4 - Log | Validar Label', () => {

  //Log

   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')

        cy.get(':nth-child(3) > .nav-bar-item > .pi-angle-down').click()
       cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle').click()
       cy.get('[data-cy="logsPageHeading"]')
        .should('contain.text', 'Logs')
       cy.get('.surface-card > p')
        .should('contain.text', 'Existem')
       cy.get('.surface-card > :nth-child(3)')
        .should('contain.text', 'Filtro')
       cy.get('[jhisortby="name"] > span')
        .should('contain.text', 'Nome')
       cy.get('[jhisortby="level"] > span')
        .should('contain.text', 'Nível')

})



 it( '5 - API | Validar Label', () => {
    //API
  cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')

    
      cy.get(':nth-child(3) > .nav-bar-item > .pi-angle-down').click()
       cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()

 })

      
 it( '6 - Admin Entity Audit | Validar Label', () => {

       //Admin Entity Audit

        cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
    
      cy.get(':nth-child(3) > .nav-bar-item').click()
       cy.get('.open > .dropdown-menu > :nth-child(6) > .dropdown-toggle').click()
      cy.get('#page-heading > span')
      
        .should('contain.text', 'Entity Audit')
       cy.get('.m-4 > .m-0')
           .should('contain.text', 'Filter')
       cy.get('.grid > :nth-child(1) > label')
        .should('contain.text', 'Entity/Table')
       cy.get(':nth-child(2) > label')
         .should('contain.text', 'Limit to')
      cy.get('.form-group > label')
       .should('contain.text', 'Filter')
       cy.get('.flex > .p-component')
        .should('contain.text', 'Load Change List')  
       
    })

     it( '7 - Métricas | Botão Atualizar', () => {

   //Métricas Botão Atualizar
   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(1) > .dropdown-toggle').click()
   cy.get('[data-cy="metricsPageHeading"]')
   .should('contain.text', 'Métricas da aplicação')
   cy.get('.surface-card > .flex > .p-element')
    .should('contain.text', 'Atualizar')
   cy.get('jhi-jvm-memory.col-12 > h4')
      .should('contain.text', 'Memória')
    cy.get('jhi-jvm-threads.col-12 > h4')
    .should('contain.text', 'Threads')
   cy.get('jhi-metrics-system.col-12 > h4')
    .should('contain.text', 'System')
   cy.wait(5000)
   cy.get('.surface-card > .flex > .p-element').click()

     })

  it( '8 - Estado do Sistema | Botão Atualizar', () => {

   //Estado do sistema Botão Atualizar
   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')

   cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
  // cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle').click()
   cy.get('.open > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
  // cy.get('.p-toast-icon-close-icon').click()
   cy.get('.surface-card > .flex > .p-element').click()

   })


   it( '9 - Configuração | Filtro', () => {

  //Configuração Filtro
   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')

   cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(3) > .dropdown-toggle').click()
   cy.get('.p-inputtext').type('javers')
 

  })

it( '10 - Log | Pesquisar', () => {
 //Logs Pesquisar
  
   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
  
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(4) > .dropdown-toggle').click()
   cy.get('.p-inputtext').type('ROOT')


})

it( '11 - API| Pesquisar', () => {
 //API sem função
  
   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
  
   cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(5) > .dropdown-toggle').click()
})


it( '12 - Entity Audit | Load Change List', () => {
//Entity Audit Botão Load Change List
  
   cy.viewport(1920, 1080);
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')
   cy.get('.alert-link').click()
   cy.wait(15000)
   cy.visit('https://teste-atriumgestao.app.tjpe.gov.br/')

   cy.get(':nth-child(3) > .nav-bar-item > .font-medium').click()
   cy.get('.open > .dropdown-menu > :nth-child(6) > .dropdown-toggle').click()
  // cy.get('.flex > .p-component').click()
   cy.get('[data-cy="entityName"] > .p-dropdown > .p-dropdown-trigger').click()
   cy.get(':nth-child(1) > .p-ripple').click()
   cy.get('.flex > .p-component').click()

})

})
