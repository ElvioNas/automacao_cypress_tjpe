describe('Certidões Criminais', () => {

   beforeEach(() => {
  cy.loginUnificada()

     })
  
  it('1 - Pessoa Fisíca Certidão Criminal / Validação de Label', () => {
 cy.get('.hidden > :nth-child(1) > .space-y-1 > :nth-child(1) > .group > .flex').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Criminal - Pessoa Física')
    cy.get('.grid > :nth-child(1) > .inline-block')
      .should('contain.text', 'Nome Completo*')
      cy.get('.grid > :nth-child(1) > .text-sm')
    .should('contain.text', 'Deseja usar nome social')
    cy.get('.p-checkbox-box').click()
    cy.get('.ng-star-inserted > .inline-block')
      .should('contain.text', 'Nome Social Nome pelo qual se identifica e é reconhecido(a) socialmente')
    cy.get(':nth-child(3) > .inline-block')
      .should('contain.text', 'CPF*')
    cy.get(':nth-child(4) > .inline-block')
      .should('contain.text', 'Data de Nascimento*')
    cy.get(':nth-child(5) > .inline-block')
      .should('contain.text', 'Nome da Mãe*')
 
      
 cy.get('#main-content label[for="field_nomePai"]').should('have.text', 'Nome do Pai');
 cy.get('#main-content label[for="field_captcha"]').should('have.text', 'Código de Segurança');
 cy.get('#cancel-save span.p-button-label').should('have.text', ' Voltar ');
  })    

  it('2 - Pessoa Fisíca Certidão Criminal / Validação Campos Obrigatórios', () => {


    cy.get('.hidden > :nth-child(1) > .space-y-1 > :nth-child(1) > .group > .flex').click()
    cy.get('[data-cy="nomeCompleto"]').type('JOAO FRANCISCO').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('JOAO FRANCISCO').clear()
    cy.get('#field_cpf > .p-inputtext').type('12345678987').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('.w-full > .p-element').type('01012000').clear()
     cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fátima').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="nomePai"]').type('João da Silva').clear()
    cy.get('[data-cy="captcha"]').type('12345').clear()
      cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.log('Total de verificações (asserções): 22');
  })

  it.skip('3 - Pessoa Fisíca Certidão Criminal / Emissão', () => {
    
      
    cy.get('.hidden > :nth-child(1) > .space-y-1 > :nth-child(1) > .group > .flex').click()
    cy.get('[data-cy="nomeCompleto"]').type('ALEX SILVA DE MEDEIROS')
    //cy.get('.p-checkbox-box').click()
    //cy.get('[data-cy="nomeSocial"]').type('ALEX SILVA DE MEDEIROS')
     cy.get('#field_cpf > .p-inputtext').type('400.816.820-69')
    cy.get('.w-full > .p-element').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('DAMIANA GOMES DA SILVA')
    cy.get('[data-cy="nomePai"]').type('LUIZ CAROLINO DE MEDEIROS FILHO')
    cy.get('[data-cy="captcha"]').click()
    cy.wait(15000)
    //cy.get('#save-entity > .w-full').click()
    cy.wait(5000)
    
    cy.get('#save-entity span.p-button-label').click();
  })
  it.skip('4 - Pessoa Fisíca Certidão Criminal / Emissão com Nome Social', () => {

    
    cy.get('.hidden > :nth-child(1) > .space-y-1 > :nth-child(1) > .group > .flex').click()
    cy.get('[data-cy="nomeCompleto"]').type('ALEX SILVA DE OLIVEIRA')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('ALEX ')
     cy.get('#field_cpf > .p-inputtext').type('393.859.750-05')
    cy.get('.w-full > .p-element').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('MARIA DA SILVA')
    cy.get('[data-cy="nomePai"]').type('LUIZ CAROLINO DE MEDEIROS')
    cy.get('[data-cy="captcha"]').click()
    cy.wait(15000)
    cy.get('#save-entity > .w-full').click()
    cy.wait(5000)

  })


  it('5 - Pessoa Jurídica Certidão Criminal / Validação de Label', () => {

  
    cy.get('.hidden > :nth-child(1) > .space-y-1 > :nth-child(2) > .group > .flex').click()
    cy.get('.pb-2')
       .should('contain.text', 'Certidão Criminal - Pessoa Jurídica')
    cy.contains('label', 'Razão Social')
       .should('contain.text', 'Razão Social')
    cy.get('.grid > :nth-child(2) > .inline-block')
       .should('contain.text', 'CNPJ*')
    cy.get(':nth-child(3) > .inline-block')
       .should('contain.text', 'Inscrição Estadual')
    cy.get('.col-span-1 > .inline-block')
       .should('contain.text', 'Código de Segurança*')
    cy.get('#cancel-save > .w-full > .p-button-label')
       .should('contain.text', 'Voltar')
    cy.get('form.ng-untouched > .flex')
       .should('contain.text', 'Emitir')
           cy.log('Total de verificações (asserções): 10');

  })

   it('6 - Pessoa Jurídica Certidão Criminal / Validação Campos Obrigatórios', () => {

    cy.get('.hidden > :nth-child(1) > .space-y-1 > :nth-child(2) > .group > .flex').click()
    cy.get('[data-cy="razaoSocial"]').type('Carro novo').clear()
    cy.get('#field_cnpj > .p-inputtext').type('12345678912345').clear()
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="razaoSocial"]')
    cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="captcha"]').type('12345').clear()
     cy.get('small.p-error')
       .should('be.visible')
             .and('contain.text', 'O campo é obrigatório.')
                 cy.log('Total de verificações (asserções): 12');
  })

  it.skip('7 - Pessoa Jurídica Certidão Criminal / Emissão', () => {

   
    cy.get('.hidden > :nth-child(1) > .space-y-1 > :nth-child(2) > .group > .flex').click()
    cy.get('[data-cy="razaoSocial"]').type('Carro novo')
    cy.get('#field_cnpj > .p-inputtext').type('58.763.551/0001-97')
    cy.get('[data-cy="inscricaoEstadual"] > .p-inputtext').type('123456789')
    cy.wait(15000)
    cy.get('#save-entity > .w-full').click()
    cy.wait(5000)
   
    
  })
    
  })
