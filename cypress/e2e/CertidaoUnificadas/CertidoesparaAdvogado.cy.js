describe('Certidões Fins de Agravo de Intrumento', () => {

   beforeEach(() => {
 cy.loginUnificada()

    })


      it('1 - Agravo de instrumento para Advogado / Validação de Label', () => {

   
    //cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(1) > .group > .flex > .ml-10').click()
   // cy.get('.max-h-screen > :nth-child(1) > :nth-child(4) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Para Fins de Agravo de Instrumento')
     cy.contains('label', 'CPF')
     .should('contain.text', 'CPF')
    cy.get('.grid > :nth-child(2) > .inline-block')
     .should('contain.text', 'ID da intimação')
    cy.get('span.text-lg')
       .should('contain.text', 'Essa certidão não abrange os processos dos Juizados Especiais')
     cy.contains('label', 'Código de Segurança')
      .should('contain.text', 'Código de Segurança')

   
   
  })
   it('2 - Agravo de instrumento para Advogado / Campos Obrigatórios', () => {

   
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    //cy.get('.max-h-screen > :nth-child(1) > :nth-child(4) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Para Fins de Agravo de Instrumento')
    cy.get('#field_cpf > .p-inputtext').type('12345678912')
    cy.get('.p-error')
     .should('be.visible')
             .and('contain.text', 'O CPF é Inválido')
     cy.get('#field_cpf > .p-inputtext').clear().type('73123993124')
     cy.get('[data-cy="captcha"]').click()
     cy.get('[data-cy="intimacao"]').click()
     cy.get('.p-error')
     .should('be.visible')
             .and('contain.text', 'O campo é obrigatório')
    cy.get('[data-cy="captcha"]').click()
    cy.get(':nth-child(2) > .validation-messages > .p-error')
     .should('be.visible')
             .and('contain.text', 'O campo é obrigatório')
   
})  

it.skip('3 - Agravo de instrumento para Advogado / Emissão', () => {

   
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    //cy.get('.max-h-screen > :nth-child(1) > :nth-child(4) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Para Fins de Agravo de Instrumento')
    cy.get('#field_cpf > .p-inputtext').type('081.677.364-58')
    cy.get('[data-cy="intimacao"]').type('102276079')
    cy.wait(12000)
    cy.get('#save-entity').click()
  //  cy.get('[style="left: 11.58%; top: 39.52%; font-size: calc(var(--scale-factor)*17.25px); font-family: sans-serif; transform: scaleX(1.0063);"]')
   //  .should('contain.text', 'CERTIDÃO PARA FINS DE AGRAVO DE INSTRUMENTO')
   cy.wait(5000)

    
})  

it.skip('4 - Agravo de instrumento para Advogado / Emissão com ID da intimação inválido', () => {

   
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    //cy.get('.max-h-screen > :nth-child(1) > :nth-child(4) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Para Fins de Agravo de Instrumento')
    cy.get('#field_cpf > .p-inputtext').type('081.677.364-58')
    cy.get('[data-cy="intimacao"]').type('111111111')
    cy.wait(12000)
    cy.get('#save-entity').click()
    //cy.get('[style="left: 11.58%; top: 39.52%; font-size: calc(var(--scale-factor)*17.25px); font-family: sans-serif; transform: scaleX(1.0063);"]')
    //cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
  //  .should('contain.text', 'Não há registros no PJE que constem que a pessoa de CPF')

    
})  

it.skip('5 - Agravo de instrumento para Advogado / Emissão sem Registro', () => {

   
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    //cy.get('.max-h-screen > :nth-child(1) > :nth-child(4) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Para Fins de Agravo de Instrumento')
    cy.get('#field_cpf > .p-inputtext').type('02112357417')
    cy.get('[data-cy="intimacao"]').type('102276079')
    cy.wait(12000)
    cy.get('#save-entity').click()
    //cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
  //  .should('contain.text', 'Não há registros no PJE que constem que a pessoa de CPF')

})
 
   it('6 - Patrocínio / Validação de Label', () => {

 // cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(3) > .group > .flex').click()
 cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
  
  cy.get('.pb-2')
   .should('contain.text', 'Certidão de Patrocínio')
   cy.get('.grid > :nth-child(1) > .inline-block')
    .should('contain.text', 'Nome Completo')
  cy.get('.grid > :nth-child(1) > .text-center')
    .should('contain.text', 'Deseja usar nome social')
  cy.get('.p-checkbox-box').click()
  cy.get('.ng-star-inserted > .inline-block')
  //cy.get('.grid > :nth-child(2) > .inline-block')
    .should('contain.text', 'Nome Social')
   //cy.get(':nth-child(2) > small')
   cy.get('.ng-star-inserted > .pl-2')
    .should('contain.text', 'Nome pelo qual se identifica')
   cy.get(':nth-child(3) > .inline-block')
    .should('contain.text', 'OAB*')
   cy.get(':nth-child(4) > .inline-block')
    .should('contain.text', 'CPF*')
   //cy.get('.col-span-1 > .inline-block')
   cy.get(':nth-child(5) > .inline-block')
    .should('contain.text', 'Código de Segurança')
   cy.get('#cancel-save > .w-full > .p-button-label')
    .should('contain.text', 'Voltar')
   cy.get('form.ng-untouched > .flex')
    .should('contain.text', 'Emitir')


  })

  it('7 - Patrocínio / Campos Obrigatórios', () => {
 
   //cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(3) > .group > .flex').click()
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
   cy.get('[data-cy="nomeCompleto"]').type('ROBERTO CARLOS').clear()
   cy.get('.p-error')
    .should('contain.text', 'O campo é obrigatório')
  cy.get('.p-checkbox-box').click()
   cy.get('[data-cy="nomeSocial"]').type('ROBERTO CARLOS').clear()
   cy.get('[data-cy="oab"]').type('1231231').clear()
   cy.get('.validation-messages > :nth-child(2)')
   .should('contain.text', 'A OAB é Inválido')
   cy.get('#field_cpf > .p-inputtext').type('121324564').clear()
  cy.get(':nth-child(4) > :nth-child(2) > .validation-messages')
   .should('contain.text', 'O campo é obrigatório')
 cy.get('[data-cy="captcha"]').type(12354).clear()
    //cy.get('.col-span-1 > :nth-child(3) > .validation-messages > .p-error')
    cy.get(':nth-child(5) > :nth-child(3) > .validation-messages > .p-error')
 .should('contain.text', 'O campo é obrigatório')

   

  })

  

  it.skip('8 - Patrocínio / Emissão', () => {
   
  // cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(3) > .group > .flex').click()
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
   cy.get('[data-cy="nomeCompleto"]').type('Maria Lucia de Souza Brandão')
   //cy.get('.p-checkbox-box').click()
   //cy.get('[data-cy="nomeSocial"]').type('Lucia')
   cy.get('[data-cy="oab"]').type('PE008861')
   cy.get('#field_cpf > .p-inputtext').type('572.174.530-46')
   cy.wait(15000)
   cy.get('#save-entity > .w-full').click()
   cy.wait(5000)


  })

  it.skip('9 - Patrocínio / Emissão com Nome Social', () => {
   
   //cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(3) > .group > .flex').click()
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
   cy.get('[data-cy="nomeCompleto"]').type('Maria Lucia de Souza Brandão')
   cy.get('.p-checkbox-box').click()
   cy.get('[data-cy="nomeSocial"]').type('Lucia')
   cy.get('[data-cy="oab"]').type('PE008861')
   cy.get('#field_cpf > .p-inputtext').type('572.174.530-46')
   cy.wait(15000)
   cy.get('#save-entity > .w-full').click()


  })

  it.skip('10 - Patrocínio / Emissão com OAB inexistente', () => {
   
  // cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(3) > .group > .flex').click()
   cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
   cy.get('[data-cy="nomeCompleto"]').type('Maria Lucia de Souza Brandão')
   cy.get('.p-checkbox-box').click()
   cy.get('[data-cy="nomeSocial"]').type('Lucia')
   cy.get('[data-cy="oab"]').type('PE586347')
   cy.get('#field_cpf > .p-inputtext').type('572.174.530-46')
   cy.wait(15000)
   cy.get('#save-entity > .w-full').click()
   cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
    .should('contain.text', 'Não foram localizados processos vinculados para os dados informados')


  })

   it.skip('11 - Patrocínio / Emissão com OAB inexistente clicar botão Voltar', () => {
   
  // cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(3) > .group > .flex').click()
    cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
   cy.get('[data-cy="nomeCompleto"]').type('Maria Lucia de Souza Brandão')
   cy.get('.p-checkbox-box').click()
   cy.get('[data-cy="nomeSocial"]').type('Lucia')
   cy.get('[data-cy="oab"]').type('PE586347')
   cy.get('#field_cpf > .p-inputtext').type('572.174.530-46')
   cy.wait(15000)
   cy.get('#save-entity > .w-full').click()
   cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
    .should('contain.text', 'Não foram localizados processos vinculados para os dados informados')
    cy.get('#cancel-save').click()

  })



})

