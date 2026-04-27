//const { version } = require("react");

describe('Certidões Negativas Cíveis 1º Grau', () => {

  beforeEach(() => {
  cy.loginUnificada()

     })
  
  
  it('1 - Processos Cíveis para Pessoa Física / Validação de Label', () => {
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
        cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
        cy.get('.pb-2')
       .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
        cy.get('.grid > :nth-child(1) > .inline-block')
          .should('contain.text', 'Nome Completo')
     cy.get('#main-content label.text-center').should('have.text', '\n            \n            Deseja usar nome social?\n            ');
        cy.get('.p-checkbox-box').click()
       cy.get('.ng-star-inserted > .inline-block')
        .should('contain.text', 'Nome Social')
        cy.get(':nth-child(3) > .inline-block')
          .should('contain.text', 'CPF')
        cy.get(':nth-child(4) > .inline-block')
          .should('contain.text', 'Data Nascimento')
        cy.get(':nth-child(5) > .inline-block')
          .should('contain.text', 'Nome da Mãe')
        cy.get(':nth-child(6) > .inline-block')
         .should('contain.text', 'Nome do Pai')
        cy.contains('label', 'Natureza')
           .should('contain.text', 'Natureza')
        cy.get('#cancel-save > .w-full > .p-button-label')
          .should('contain.text', 'Voltar')
        cy.get('form.ng-untouched > .flex')
           .should('contain.text', 'Emitir')
        cy.contains('label', 'Código de Segurança')
          .should('contain.text', 'Código de Segurança')
    cy.get('#main-content label.text-center').click();
    cy.get('#main-content div.grid > div:nth-child(1)').click();
    
    cy.get('#main-content div.grid').click();
    cy.get('#main-content div:nth-child(6)').click();
    cy.get('#main-content span.ml-auto').should('have.text', '\n                (opcional)\n              ');
    //principais pensadores
  })
  

  it('2 - Processos Cíveis para Pessoa Física / Campos Obrigatórios', () => {

   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO SANTOS DA SILVA').clear()
     cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('PEDRO').clear()
    cy.get('#field_cpf > .p-inputtext').type('4654654654654').clear()
     cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000').clear()
      cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima').clear()
      cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('.p-dropdown-label').click().click()
      cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.log('Total de verificações (asserções): 22');
      
      
      
  })

  it.skip('3 - Processos Cíveis para Pessoa Física / Emissão com Ocorrência', () => {

   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('"MARTHA PATRICIA SAMPAIO ASSIS')
    //cy.get('.p-checkbox-box').click()
   // cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('68645813491')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_3_0').click() 
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
     .should('contain.text', 'Não foi possível emitir a Certidão Negativa de Antecedentes Criminais')
    cy.wait(5000)
    
  })

  it.skip('4 - Processos Cíveis para Pessoa Física / Emissão sem informar Natureza', () => {
cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO SANTOS DA SILVA COSTA COUTO')
    cy.get('#field_cpf > .p-inputtext').type('968.303.510-81')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.wait(15000)
    cy.get('#save-entity').click()
cy.get('#main-content div.items-center').click();
cy.get('#main-content div.break-words').should('have.text', 'Natureza não encontrada');
  })

  it.skip('5 - Processos Cíveis para Pessoa Física / Emissão Natureza Todas', () => {

   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO SANTOS DA SILVA COSTA COUTO')
    cy.get('#field_cpf > .p-inputtext').type('968.303.510-81')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_3_0').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)
      
  })

  it.skip('6 - Processos Cíveis para Pessoa Física / Emissão com Nome Social Natureza Todas', () => {


    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO SANTOS DA SILVA COSTA COUTO')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('968.303.510-81')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_3_0').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)
    
    

      
  })

  it.skip('7 - Processos Cíveis para Pessoa Física / Emissão Natureza Cíveis', () => {

 
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO SANTOS DA SILVA NASCIMENTO')
    //cy.get('.p-checkbox-box').click()
   // cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('441.467.440-91')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-trigger-icon').click()
    cy.get('#pn_id_3_1').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)
    
    

      
  })

  it.skip('8 - Processos Cíveis para Pessoa Física / Emissão com Nome Social Natureza Cíveis', () => {

   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO SANTOS DA SILVA NASCIMENTO')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('441.467.440-91')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-trigger-icon').click()
    cy.get('#pn_id_3_1').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)
    
    

      
  })

  it.skip('9 - Processos Cíveis para Pessoa Física / Emissão Natureza Execução Fiscal', () => {

    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO PEREIRA DA SILVA NASCIMENTO')
    //cy.get('.p-checkbox-box').click()
    //cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('575.902.890-19')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-trigger-icon').click()
    cy.get('#pn_id_3_2').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)
    
    

      
  })

    it.skip('10 - Processos Cíveis para Pessoa Física / Emissão com Nome Social Natureza Execução Fiscal', () => {

    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('SILVIO PEREIRA DA SILVA NASCIMENTO')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('575.902.890-19')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-trigger-icon').click()
    cy.get('#pn_id_3_2').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)
    
    

      
  })
  

  it.skip('11 - Processos Cíveis para Pessoa Física / Emissão Natureza Execução Extrajudicial', () => {

    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('PEDRO DE LARA DOS SANTOS FERREIA')
    //cy.get('.p-checkbox-box').click()
    //cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('675.790.440-30')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-trigger-icon').click()
    cy.get('#pn_id_3_3').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000) 

      
  })

  

  it.skip('12 - Processos Cíveis para Pessoa Física / Emissão com Nome Social Natureza Execução Extrajudicial', () => {

   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 1º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('PEDRO DE LARA DOS SANTOS FERREIA')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('PEDRO')
    cy.get('#field_cpf > .p-inputtext').type('675.790.440-30')
    cy.get('[data-cy="dataNascimento"] > .w-full > .p-inputtext').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.get('.p-dropdown-trigger-icon').click()
    cy.get('#pn_id_3_3').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000) 

      
  })

  

   it('13 - Processos Cíveis para Pessoa Jurídica / Validação de Label', () => {

    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 1º Grau')
    cy.get('.grid > :nth-child(1) > .inline-block')
      .should('contain.text', 'Razão Social')
    cy.get('.grid > :nth-child(2) > .inline-block')
      .should('contain.text', 'CNPJ')
    cy.get('.grid > :nth-child(3) > .flex > .inline-block')
      .should('contain.text', 'Inscrição Estadual')
    cy.contains('label', 'Natureza')
       .should('contain.text', 'Natureza')
    cy.contains('label', 'Código de Segurança')
       .should('contain.text', 'Código de Segurança')
    cy.get('#cancel-save > .w-full')
       .should('contain.text', 'Voltar')
    cy.contains('button', 'Emitir')
        .should('contain.text', 'Emitir')
   cy.log('Total de verificações (asserções): 12');

  })

  it('14 - Processos Cíveis para Pessoa Jurídica / Campos Obrigatórios', () => {

 
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
     .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('Auto Peças Recife').clear()
    cy.get('small.p-error')
     .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('#field_cnpj > .p-inputtext').type('92.496.645/0001-85').clear()
    cy.get('small.p-error')
    .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('123456789123456789').clear()
    cy.get('.p-dropdown-label').click().click()
     cy.get('small.p-error')
    .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="captcha"]').type('12345').clear()
    cy.get('small.p-error')
    .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.log('Total de verificações (asserções): 19');

  })

  it.skip('15 - Processos Cíveis para Pessoa Jurídica / Emissão com Ocorrência', () => {


    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
     .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('SUL AMÉRICA COMPANHIA NACIONAL DE SEGUROS S/A')
    cy.get('#field_cnpj > .p-inputtext').type('01.685.053/0001-56')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('1234567891')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_2_0').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(3000)
    cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
    .should('contain.text', 'Não foi possível emitir a Certidão Negativa de Antecedentes Criminais')

  })



   it.skip('16 - Processos Cíveis para Pessoa Jurídica / Emissão Natureza Todas', () => {


    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
     .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('Auto Peças Recife')
    cy.get('#field_cnpj > .p-inputtext').type('92.496.645/0001-85')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('1234567891')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_2_0').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)

  })

  it.skip('17 - Processos Cíveis para Pessoa Jurídica / Emissão Natureza Cíveis', () => {

    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
     .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('Auto Peças Recife')
    cy.get('#field_cnpj > .p-inputtext').type('92.496.645/0001-85')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('1234567891')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_2_1').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(3000)

  })

  it.skip('18 - Processos Cíveis para Pessoa Jurídica / Emissão Natureza Execução Fiscal', () => {

  
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
     .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('Auto Peças Recife')
    cy.get('#field_cnpj > .p-inputtext').type('92.496.645/0001-85')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('1234567891')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_2_2').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)

  })

  it.skip('19 - Processos Cíveis para Pessoa Jurídica / Emissão Natureza Execução Extrajudicial', () => {

    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
     .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('Auto Peças Recife')
    cy.get('#field_cnpj > .p-inputtext').type('92.496.645/0001-85')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('1234567891')
    cy.get('.p-dropdown-label').click()
    cy.get('#pn_id_2_3').click()
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.wait(5000)
   // cy.get('[style="left: 32.86%; top: 18.71%; font-size: calc(var(--scale-factor)*18.00px); font-family: sans-serif; transform: scaleX(1.00707);"]')
    //.should('contain.text', 'TRIBUNAL DE JUSTIÇA')



  })

  
  

  it('20 - Processos Cíveis de Pessoa Jurídica para fins de Licitação / Validação de Label', () => {

    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(3) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Cível - Para Fins de Licitação - 1º Grau')
    cy.get('.grid > :nth-child(1) > .inline-block')
     .should('contain.text', 'Razão Social')
    cy.get('.grid > :nth-child(2) > .inline-block')
     .should('contain.text', 'CNPJ')
    cy.contains('label', 'Inscrição Estadual')
     .should('contain.text', 'Inscrição Estadual')
    cy.get('#cancel-save > .w-full')
     .should('contain.text', 'Voltar')
    cy.contains('button', 'Emitir')
        .should('contain.text', 'Emitir')
    cy.contains('label', 'Código de Segurança')
      .should('contain.text', 'Código de Segurança')

  
  })
  

   it('21 - Processos Cíveis de Pessoa Jurídica para fins de Licitação / Campos Obrigatórios', () => {

    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(3) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Cível - Para Fins de Licitação - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('AUTO PEÇAS').clear()
     cy.get('small.p-error')
    .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('#field_cnpj > .p-inputtext').type('132132132132111').clear()
     cy.get('small.p-error')
    .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="inscricaoEstadual"]').type('1').clear()
     cy.get('small.p-error')
    .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    
    cy.get('[data-cy="captcha"]').type('123123').clear()
      cy.get(':nth-child(3) > .validation-messages > .p-error')
      .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.log('Total de verificações (asserções): 14');


   
  })

  it.skip('22 - Processos Cíveis de Pessoa Jurídica para fins de Licitação / Emissão com Ocorrência', () => {
    
   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(3) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Cível - Para Fins de Licitação - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('AGRIVET COMÉRCIO E REPRESENTAÇÕES LTDA')
    cy.get('#field_cnpj > .p-inputtext').type('70245840000108')
    cy.wait(15000)
    cy.get('[data-cy="captcha"]')
    cy.get('#save-entity > .w-full').click()
    //cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
     //.should('contain.text', 'Não foi possível emitir a Certidão Negativa dos Processos Cíveis de Pessoa Jurídica 1º Grau para fins de Licitação')
    
  })

  

   it.skip('23 - Processos Cíveis de Pessoa Jurídica para fins de Licitação / Emissão', () => {
    
   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(1) > .group > .h-9 > .ml-10').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(3) > .rounded > .inline-block').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Cível - Para Fins de Licitação - 1º Grau')
    cy.get('[data-cy="razaoSocial"]').type('FEIJÃO PRETO')
    cy.get('#field_cnpj > .p-inputtext').type('48164204000194')
    cy.wait(15000)
    cy.get('[data-cy="captcha"]')
    cy.get('#save-entity > .w-full').click()
    cy.wait(5000)
    

  })
})