describe('Validação', () => {


    beforeEach(() => {
  cy.loginUnificada()

     })
  it('1 - Validar Certidão / Validação de Label', () => {
       
    
cy.get('jhi-sidebar-menu.hidden div:nth-child(5) ul.flex.list-none li.ng-star-inserted div.group div.flex').click();
    
    
    cy.get('.pb-2')
      .should('contain.text', 'Validar Certidão')
    cy.get('.space-y-4 > :nth-child(1) > .inline-block')
      .should('contain.text', 'Número da Certidão')
    cy.get('input[placeholder="0000000/0000"]')
      .should('have.attr', 'placeholder', '0000000/0000');
    cy.get('.space-y-4 > :nth-child(2) > .inline-block')
      .should('contain.text', 'Código de Autenticação')
    cy.get('.mb-4 > .inline-block')
       .should('contain.text', 'Código de Segurança')
    cy.get('.p-6 > .space-y-4')
       .should('contain.text', 'Validar')
     cy.log('Total de verificações (asserções): 9');
  })

  it('2 - Validar Certidão / Campos Obrigatórios', () => {
    
//cy.get('.hidden > :nth-child(4) > .space-y-1 > li.ng-star-inserted > .group > .flex').click()
    cy.get('jhi-sidebar-menu.hidden div:nth-child(5) ul.flex.list-none li.ng-star-inserted div.group div.flex a.truncate').click();  
    cy.get('.pb-2')
       .should('contain.text', 'Validar Certidão')
    cy.get('[data-cy="captcha"]').type('12345').clear()
    cy.get('small.p-error')
     .should('be.visible')
           .and('contain.text', 'O campo é obrigatório.')
     cy.log('Total de verificações (asserções): 7')

  })

  it('3 - Validar Certidão / Emissão com Dados Válidos', () => {
    cy.get('jhi-sidebar-menu.hidden div:nth-child(5) ul.flex.list-none li.ng-star-inserted div.group div.flex a.truncate').click();
    cy.get('.pb-2')
      .should('contain.text', 'Validar Certidão')
    cy.get('#numeroCertidaoInput > .p-inputtext').type('00014112025')
    cy.get('#codigoInput > .p-inputtext').type('5SAISHC6IKYJ')
    cy.wait(15000)
    cy.get('.p-button').click()

  })


    it('4 - Validar Certidão / Emissão com Dados Inválidos', () => {
    
//cy.get('.hidden > :nth-child(4) > .space-y-1 > li.ng-star-inserted > .group > .flex').click()
    
cy.get('jhi-sidebar-menu.hidden div:nth-child(5) ul.flex.list-none li.ng-star-inserted div.group div.flex a.truncate').click();  
    cy.get('.pb-2')
      .should('contain.text', 'Validar Certidão')
    cy.get('#numeroCertidaoInput > .p-inputtext').type('00045672025')
    cy.get('#codigoInput > .p-inputtext').type('A8A8A9E4E5T8')
    cy.wait(15000)
    cy.get('.p-button > .w-full').click()
    cy.get('.p-toast-detail')
     .should('contain.text', 'Certidão não encontrada com os dados informados')
     cy.log('Total de verificações (asserções): 8');
  
    })


})