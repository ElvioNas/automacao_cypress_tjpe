describe('Certidões Negativas Cíveis 2º Grau', () => {

   beforeEach(() => {
  cy.loginUnificada()

     })
  it('1 - Processos Cíveis para Pessoa Física 2º Grau e Colégio Recursal / Validação de Label', () => {
   // cy.viewport(1920, 1080);
    //cy.visit('https://teste-certidoesunificadas.app.tjpe.gov.br/')
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 2º Grau')
    cy.get('.grid > :nth-child(1) > .inline-block')
      .should('contain.text', 'Nome Completo')
    cy.get('.grid > :nth-child(1) > .text-center')
      .should('contain.text', 'Deseja usar nome social')
    cy.get('.p-checkbox-box').click()
    cy.get('.ng-star-inserted > .inline-block')
     .should('contain.text', 'Nome Social Nome pelo qual se identifica e é reconhecido(a) socialmente')
    cy.get(':nth-child(3) > .inline-block')
      .should('contain.text', 'CPF') 
    cy.get(':nth-child(4) > .inline-block')
      .should('contain.text', 'Data de Nascimento')
    cy.get(':nth-child(5) > .inline-block')
      .should('contain.text', 'Nome da Mãe')
    cy.get(':nth-child(6) > .inline-block')
      .should('contain.text', 'Nome do Pai') 
    cy.get('#cancel-save > .w-full')
      .should('contain.text', 'Voltar')
    cy.get('form.ng-untouched > .flex')
      .should('contain.text', 'Emitir')
    cy.log('Total de verificações (asserções): 14');
   cy.get('#main-content div.pt-1').click();
 //  cy.get('#main-content div.pt-1 span:nth-child(1)').should('have.text', 'Emissão de Certidões | Versão v1.2.0-SNAPSHOT');
  })


  it('2 - Processos Cíveis para Pessoa Física 2º Grau e Colégio Recursal / Campos Obrigatórios', () => {
   // cy.viewport(1920, 1080);
   // cy.visit('https://teste-certidoesunificadas.app.tjpe.gov.br/')
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 2º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('JOAO ROBERTO').clear()
       cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('JOAO').clear()
       cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('#field_cpf > .p-inputtext').type('12345678912').clear()
       cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('.w-full > .p-element').type(1111).clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima').clear()
      cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="nomePai"]').type('Pedro de Oliveira').clear()
    cy.get('[data-cy="captcha"]').type(12345).clear()
    cy.get('.col-span-1 > :nth-child(3) > .validation-messages > .p-error')
     .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
   cy.get('#main-content div.pt-1').click();
   //cy.get('#main-content div.pt-1 span:nth-child(1)').should('have.text', 'Emissão de Certidões | Versão v1.2.0-SNAPSHOT');
  })

   it('3 - Processos Cíveis para Pessoa Física 2º Grau e Colégio Recursal / Emissão com Ocorrência', () => {
   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 2º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('ROMERO PIO DA CUNHA PIRES')
    cy.get('#field_cpf > .p-inputtext').type('03723343422')
    cy.get('.w-full > .p-element').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('GLORIA MARIA PIO DA CUNHA PIRES')
    cy.wait(12000)
    cy.get('#save-entity').click()
   // cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
    //    .should('contain.text', 'Não foi possível emitir a Certidão Negativa.')
   
    
  })

  it('4 - Processos Cíveis para Pessoa Física 2º Grau e Colégio Recursal / Emissão', () => {
   
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 2º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('JOAO ROBERTO')
    cy.get('#field_cpf > .p-inputtext').type('229.659.890-05')
    cy.get('.w-full > .p-element').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.wait(12000)
    cy.get('#save-entity').click()
     cy.log('Total de verificações (asserções): 11');
      cy.wait(5000)
    
  })

    it('5 - Processos Cíveis para Pessoa Física 2º Grau e Colégio Recursal / Emissão com Nome Social', () => {
  
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(1) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Física - 2º Grau')
    cy.get('[data-cy="nomeCompleto"]').type('JOAO ROBERTO')
     cy.get('.p-checkbox-box').click()       
    cy.get('[data-cy="nomeSocial"]').type('JOAO')
    cy.get('#field_cpf > .p-inputtext').type('229.659.890-05')
    cy.get('.w-full > .p-element').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.wait(12000)
    cy.get('#save-entity').click()
     cy.log('Total de verificações (asserções): 11');
    
  })

 it('6 - Processos Cíveis para Pessoa Jurídica 2º Grau e Colégio Recursal / Validação Label', () => {
  
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 2º Grau')
    cy.contains('label', 'Razão Social')
       .should('contain.text', 'Razão Social')
    cy.get('.grid > :nth-child(2) > .inline-block')
       .should('contain.text', 'CNPJ')
    cy.get('.grid > :nth-child(3) > .flex > .inline-block')
       .should('contain.text', 'Inscrição Estadual')
    cy.get('.col-span-1 > .inline-block')
       .should('contain.text', 'Código de Segurança')
    cy.get('#cancel-save > .w-full')
       .should('contain.text', 'Voltar')
    cy.get('.flex-col-reverse')
       .should('contain.text', 'Emitir')
     cy.log('Total de verificações (asserções): 11');
    
 
  }) 

   it('7 - Processos Cíveis para Pessoa Jurídica 2º Grau e Colégio Recursal / Campos Obrigatórios', () => {
 
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 2º Grau')
    cy.get('[data-cy="razaoSocial"]').type('Carro Velho').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('#field_cnpj > .p-inputtext').type('32.421.358/0001-84').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('12345').clear()
    cy.get('[data-cy="captcha"]').type(12345).clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.') 
     cy.log('Total de verificações (asserções): 16');

  }) 
     it('8 - Processos Cíveis para Pessoa Jurídica 2º Grau e Colégio Recursal / Emissão com Ocorrência', () => {
    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 2º Grau')
    cy.get('[data-cy="razaoSocial"]').type('BANCO BRADESCO SA')
    cy.get('#field_cnpj > .p-inputtext').type('60.746.948/8076-79')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('@#$%$')
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.get('.mx-auto > .ng-star-inserted > :nth-child(1)')
      .should('contain.text', 'Não foi possível emitir a Certidão Negativa.')
    

  }) 

  it('9 - Processos Cíveis para Pessoa Jurídica 2º Grau e Colégio Recursal / Emissão', () => {
    
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(2) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Pessoa Jurídica - 2º Grau')
    cy.get('[data-cy="razaoSocial"]').type('Carro Velho')
    cy.get('#field_cnpj > .p-inputtext').type('32.421.358/0001-84')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('@#$%$')
    cy.wait(12000)
    cy.get('#save-entity').click()
    //cy.get('[style="left: 32.97%; top: 29.81%; font-size: calc(var(--scale-factor)*24.00px); font-family: sans-serif; transform: scaleX(0.991991);"]')
    // .should('contain.text', 'CERTIDÃO CÍVEL')
    cy.wait(5000)

  }) 

  it('10 - Processos Cíveis para Pessoa Jurídica 2º Grau para fins de Licitação / Validação Label', () => {

    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(3) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Para Fins de Licitação - 2º Grau')
    cy.contains('label', 'Razão Social')
       .should('contain.text', 'Razão Social')
    cy.get('.grid > :nth-child(2) > .inline-block')
       .should('contain.text', 'CNPJ')
    cy.get('.grid > :nth-child(3) > .flex > .inline-block')
       .should('contain.text', 'Inscrição Estadual')
    cy.get('.col-span-1 > .inline-block')
       .should('contain.text', 'Código de Segurança')
    cy.get('#cancel-save > .w-full')
       .should('contain.text', 'Voltar')
    cy.get('.flex-col-reverse')
       .should('contain.text', 'Emitir')
     cy.log('Total de verificações (asserções): 11');
    
 
  }) 

  
  it('11 - Processos Cíveis para Pessoa Jurídica 2º Grau para fins de Licitação / Campos Obrigatórios', () => {
  
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(3) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Para Fins de Licitação - 2º Grau')
    cy.get('[data-cy="razaoSocial"]').type('CARRO CELHO').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('#field_cnpj > .p-inputtext').type('12345678').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="captcha"]').type(12345).clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
     cy.log('Total de verificações (asserções): 14');

 
  }) 

   it('12 - Processos Cíveis para Pessoa Jurídica 2º Grau para fins de Licitação / Emissão', () => {
  
    cy.get('.hidden > :nth-child(2) > .space-y-1 > :nth-child(2) > .group > .h-9').click()
    cy.get('.max-h-screen > :nth-child(1) > :nth-child(3) > .rounded > .inline-block').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Cível - Para Fins de Licitação - 2º Grau')
    cy.get('[data-cy="razaoSocial"]').type('CARRO CELHO') 
    cy.get('#field_cnpj > .p-inputtext').type('32.421.358/0001-84')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext') 
    cy.wait(12000)
    cy.get('#save-entity').click()
    cy.log('Total de verificações (asserções): 9');
    cy.wait(5000)
             
 
  }) 


})