describe('Outras Certidões', () => {


  
   beforeEach(() => {
  cy.loginUnificada()

     })

     

    it('1 - Para Fins Eleitorais / Validação de Label', () => {

    //cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex').click()
    cy.get('.hidden > :nth-child(4) > .space-y-1 > :nth-child(1) > .group > .flex > .ml-10').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Para Fins Eleitorais')
    cy.get('.grid > :nth-child(1) > .inline-block')
      .should('contain.text', 'Nome Completo*')
    cy.get('.grid > :nth-child(1) > .text-center')
      .should('contain.text', 'Deseja usar nome social')
    cy.get('.p-checkbox-box').click()
     cy.get('.ng-star-inserted > .inline-block')
       .should('contain.text', 'Nome Social')
    cy.get(':nth-child(3) > .inline-block')
      .should('contain.text', 'CPF*')
    cy.get(':nth-child(4) > .inline-block')
      .should('contain.text', 'Data de Nascimento*')
    cy.get(':nth-child(5) > .inline-block')
      .should('contain.text', 'Nome da Mãe*')
    cy.get(':nth-child(6) > .inline-block')
      .should('contain.text', 'Nome do Pai')
    //cy.get('.col-span-1 > .inline-block')
    cy.get('.grid-cols-1 > .inline-block')
      .should('contain.text', 'Código de Segurança')

    cy.get('#cancel-save > .w-full')
       .should('contain.text', 'Voltar')
    cy.get('form.ng-untouched > .flex')
       .should('contain.text', 'Emitir')
        cy.log('Total de verificações (asserções): 13')
     
   })

   it('2 - Para Fins Eleitorais / Campos Obrigatórios', () => {
    
    //cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex').click()
    cy.get('.hidden > :nth-child(4) > .space-y-1 > :nth-child(1) > .group > .flex > .ml-10').click()
   
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Para Fins Eleitorais')
    cy.get('[data-cy="nomeCompleto"]').type('Pedro Paulo').clear()
      cy.get('small.p-error')
      .should('be.visible')
           .and('contain.text', 'O campo é obrigatório.')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('Pedro').clear()
    cy.get('#field_cpf > .p-inputtext').type('12345678978').clear()
     cy.get('small.p-error')
      .should('be.visible')
           .and('contain.text', 'O campo é obrigatório.')
    cy.get('.w-full > .p-element').type('01012000').clear()
     cy.get('small.p-error')
      .should('be.visible')
           .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima').clear()
     cy.get('small.p-error')
      .should('be.visible')
           .and('contain.text', 'O campo é obrigatório.')
    cy.get('[data-cy="captcha"]').type('12345').clear()
     cy.get('small.p-error')
      .should('be.visible')
           .and('contain.text', 'O campo é obrigatório.')  
     cy.log('Total de verificações (asserções): 21');
     
   })

it.skip('3 - Para Fins Eleitorais / Emissão', () => {
   
   // cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex').click()
    cy.get('.hidden > :nth-child(4) > .space-y-1 > :nth-child(1) > .group > .flex > .ml-10').click()
  
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Para Fins Eleitorais')
    cy.get('[data-cy="nomeCompleto"]').type('Benedita Analu Olivia Moura')
    //cy.get('.p-checkbox-box').click()
    //cy.get('[data-cy="nomeSocial"]').type('Pedro')    
    cy.get('#field_cpf > .p-inputtext').type('466.805.813-03')
    cy.get('.w-full > .p-element').type('08041998')
    cy.get('[data-cy="nomeMae"]').type('Eliane Bruna Maitê')
    cy.wait(15000)
    cy.get('#save-entity').click()
    cy.log('Total de verificações (asserções): 10');
    cy.wait(5000)
     
   })

   it.skip('4 - Para Fins Eleitorais / Emissão com nome Social', () => {
   
    //cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(2) > .group > .flex').click()
    cy.get('.hidden > :nth-child(4) > .space-y-1 > :nth-child(1) > .group > .flex > .ml-10').click()

    cy.get('.pb-2')
      .should('contain.text', 'Certidão Para Fins Eleitorais')
    cy.get('[data-cy="nomeCompleto"]').type('Pedro Paulo')
    cy.get('.p-checkbox-box').click()
    cy.get('[data-cy="nomeSocial"]').type('Pedro')    
    cy.get('#field_cpf > .p-inputtext').type('364.422.610-50')
    cy.get('.w-full > .p-element').type('01012000')
    cy.get('[data-cy="nomeMae"]').type('Maria de Fatima')
    cy.wait(15000)
    cy.get('#save-entity').click()
    cy.log('Total de verificações (asserções): 10');
     
   })
  it('5 - Declaratória / Validação de Label', () => {
    
   // cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(1) > .group > .flex').click()
    cy.get('.hidden > :nth-child(4) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
    cy.get('.pb-2')
      .should('contain.text', 'Certidão Declaratória')
    cy.contains('label', 'Código de Segurança')
      .should('contain.text', 'Código de Segurança')
    cy.get('#save-entity > .w-full')
      .should('contain.text', 'Emitir')
    cy.log('Total de verificações (asserções): 6');

  })


  it('6 - Declaratória / Campos Obrigatórios', () => {

  
  cy.get('.hidden > :nth-child(4) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
  cy.get('[data-cy="captcha"]').type('12345').clear();
  cy.get('small.p-error')
    .should('be.visible') 
    .and('contain.text', 'O campo é obrigatório.'); 
  cy.log('Total de verificações (asserções): 6');

  })  

  it.skip('7 - Declaratória / Emissão', () => {
    
    //cy.get('.hidden > :nth-child(3) > .space-y-1 > :nth-child(1) > .group > .flex').click()
    cy.get('.hidden > :nth-child(4) > .space-y-1 > :nth-child(2) > .group > .flex > .ml-10').click()
    cy.wait(15000)
    cy.get('#save-entity').click()
    cy.contains('span', 'CERTIDÃO DECLARATÓRIA').should('be.visible')
    cy.log('Total de verificações (asserções): 5');
    cy.wait(5000)
             
   })


   


})