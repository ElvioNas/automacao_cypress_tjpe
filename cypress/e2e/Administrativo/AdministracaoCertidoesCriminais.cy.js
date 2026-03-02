
describe('Administração Certidões Criminais', () => {

/*beforeEach(() => { 

  cy.login() 

     }) */

  it('1 - Consultar Pendências Pessoa Física / Validação de Label', () => {
   
cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000) 
    cy.get('.font-bold > .inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Certidões Cíveis')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Outras Certidões')
    cy.get('.p-breadcrumb-list')
      .should('contain.text', 'Solicitações')
    cy.get('h3')
       .should('contain.text','Consultar')
    cy.get('.p-button-label')
       .should('contain.text', 'Consultar')
    cy.get('.text-primary > span')
       .should('contain.text', 'Limpar')
    cy.get('#no-result > .block')
       .should('contain.text', 'Nenhuma solicitação encontrada') 
       cy.wait(3000)
  })

it('2 - Consultar Pendências Pessoa Física / Campos Obrigatórios', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
   // cy.get('#home-logged-message')
    //  should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.wait(3000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('111.111.111-11');
cy.get('div.bg-white').click();
cy.get('small.p-error').should('have.text', ' CPF inválido. ');
})

it('3 - Consultar Pendências Pessoa Física / Pesquisar Homônimo por CPF', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
     cy.wait(3000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('249.639.624-46');
cy.get('span.p-button-label').click();
})

  it('4 - Consultar Pendências Pessoa Física / Pesquisar Homônimo por Nome', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    //cy.get('[data-cy="nome"]').type('Lorena Rayssa Analu Caldeira')
    //cy.get(':nth-child(3) > :nth-child(1) > .flex > .flex-column > .ml-2').click()
    //cy.get('.flex > .p-component').click()
    //cy.get('[data-cy="nome"]')
     cy.wait(3000)
    
  })

  it('5 - Consultar Pendências Pessoa Física / Pesquisar Homônimo por CPF e Nome', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
     cy.wait(3000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('249.639.624-46');
cy.get('button.p-button').click();
  })



  it('6 - Consultar Pendências Pessoa Física / Emissão Sem Pendência para o CPF informado', () => {
    
    cy.viewport(1920, 1080);
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
        cy.get('.alert-link').click()
        cy.wait(5000) //Digite o seu CPF e click para confirmar
        cy.get('#home-logged-message')
          .should('contain.text', 'Elvio Ferreira do Nascimento')
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
        cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
        cy.get('.font-bold > .inline-block')
          .should('contain.text', 'Emissão de Certidões - Administração')
        cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
          .should('contain.text', 'Certidões Criminais')
        cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
          .should('contain.text', 'Certidões Cíveis')
    
     cy.wait(3000)
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('005.874.340-58');
    cy.get('span.p-button-label').click();
    cy.get('div.flex.ng-star-inserted div.items-center').click();
    //cy.get('div.break-words').should('have.text', 'Não existe solicitação na WEB.');
    cy.get('div.break-words').should('have.text', 'Não existe solicitação realizada na WEB.');
  })

  it('7 - Consultar Pendências Pessoa Física / Emissão Certidão Negativa', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.get('.font-bold > .inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Certidões Criminais')
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Certidões Cíveis')
    //Antes de gerar esse cenário é preciso gerar uma certidão criminal com pendências
    //Nome da parte FERNANDO LUIZ MIRANDA RAMOS
    //Nome da mãe  - certidao_criminal_pessoa_fisica_parte_judwin_1g
     cy.wait(3000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('542.735.284-87');
cy.get('span.p-button-label').click();
  })

   it('8 - Consultar Pendências Pessoa Física / Emissão Certidão Negativa sem Justificativa', () => {
    
    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
     .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.get('.font-bold > .inline-block')
    .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
    .should('contain.text', 'Certidões Criminais')
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
    .should('contain.text', 'Certidões Cíveis')
        //Antes de gerar esse cenário é preciso gerar uma certidão criminal com pendências
        //Nome da parte FERNANDO LUIZ MIRANDA RAMOS
        //Nome da mãe  - certidao_criminal_pessoa_fisica_parte_judwin_1g
    
     cy.wait(3000)
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('542.735.284-87');
    /*
    cy.get('span.p-button-label').click();
    cy.get('[data-cy="entityTable"] td:nth-child(7)').click();
    cy.get('#pn_id_8-table tr:nth-child(1) td:nth-child(1) p-checkbox.p-element div.p-checkbox div.p-checkbox-box').click();
    cy.get('div.flex.gap-2 button:nth-child(1)').click();
    cy.get('div.justify-content-end').click();
    cy.get('small.p-error').click();
    cy.get('small.p-error').should('have.text', '\n      A justificativa deve ter pelo menos 1 caractere\n    ');
    */
    cy.get('span.p-button-label').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(2) span.font-bold').click();
   })


  it('9 - Consultar Pendências Pessoa Física / Emissão Certidão Negativa - Nada consta em tramitação', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.get('.font-bold > .inline-block')
  .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Certidões Criminais')
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Certidões Cíveis')
       //Antes de gerar esse cenário é preciso gerar uma certidão criminal com pendências
       //Nome da parte ANNA CAROLINA MELO DA COSTA - certidao_criminal_pessoa_fisica_parte_judwin_1g
       //Nome da mãe   EVALDA LUCIA DE MELO
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('043.919.924-77');
cy.get('span.p-button-label').click();
//cy.get('[data-cy="entityTable"] td:nth-child(6)').click();
//cy.get('div.flex.gap-2 button:nth-child(2)').click();
//cy.get('[name="justificativa"]').click();
//cy.get('[name="justificativa"]').type('testes de sistema');
//cy.get('p-button[label="Emitir"] button.p-ripple').click();
  })

  it('10 - Consultar Pendências Pessoa Física / Emissão Certidão Negativa - Nada consta em tramitação sem Justificativa', () => {
cy.viewport(1920, 1080);
cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
cy.get('.alert-link').click()
cy.wait(5000) //Digite o seu CPF e click para confirmar
cy.get('#home-logged-message')
.should('contain.text', 'Elvio Ferreira do Nascimento')
cy.wait(2000)
cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
cy.get('.font-bold > .inline-block')
.should('contain.text', 'Emissão de Certidões - Administração')
cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
.should('contain.text', 'Certidões Criminais')
cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
.should('contain.text', 'Certidões Cíveis')
//Antes de gerar esse cenário é preciso gerar uma certidão criminal com pendências
//Nome da parte ANNA CAROLINA MELO DA COSTA - certidao_criminal_pessoa_fisica_parte_judwin_1g
//Nome da mãe   EVALDA LUCIA DE MELO

cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('043.919.924-77');
cy.get('span.p-button-label').click();
//cy.get('[data-cy="entityTable"] td:nth-child(2)').click();
//cy.get('div.flex.gap-2 button:nth-child(2)').click();
//cy.get('[name="justificativa"]').type('1');
//cy.get('p-button[label="Emitir"] button.p-ripple').click();
  })

  it('11 - Consultar Pendências Pessoa Física / Emissão Certidão Negativa - Certidão Positiva', () => {
    
    cy.viewport(1920, 1080);
    
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
        cy.get('.alert-link').click()
        cy.wait(5000) //Digite o seu CPF e click para confirmar
        cy.get('#home-logged-message')
          .should('contain.text', 'Elvio Ferreira do Nascimento')
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
        cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
        cy.get('.font-bold > .inline-block')
          .should('contain.text', 'Emissão de Certidões - Administração')
        cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
          .should('contain.text', 'Certidões Criminais')
        cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
          .should('contain.text', 'Certidões Cíveis')
        //Antes de gerar esse cenário é preciso gerar uma certidão criminal com pendências
        //Nome da parte EUGÊNIO VALDEMAR DA SILVA - MÃE MARIA DA PENHA BRITO DA SILVA - certidao_criminal_pessoa_fisica_parte_judwin_1g
        //Nome da mãe MARIA DA PENHA BRITO DA SILVA
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('064.447.914-05');
    cy.get('button.p-button').click();
    //cy.get('[data-cy="entityTable"] td:nth-child(2) span.font-bold').click();
    //cy.get('#pn_id_8-table td:nth-child(1) div.p-checkbox-box').click();
    //cy.get('button:nth-child(3)').click();
    //cy.get('[name="justificativa"]').type('teste de sistema');
    //cy.get('p-button[label="Emitir"] button.p-ripple').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(6)').click();
  })
 
  
  it('12 - Consultar Pendências Pessoa Física / Emissão Certidão Negativa - Certidão Positiva sem Justificativa', () => {

cy.viewport(1920, 1080);
  cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
  cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
  cy.get('.alert-link').click()
  cy.wait(5000) //Digite o seu CPF e click para confirmar
  cy.get('#home-logged-message')
  .should('contain.text', 'Elvio Ferreira do Nascimento')
  cy.wait(2000)
  cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
  cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
  cy.get('.font-bold > .inline-block')
  .should('contain.text', 'Emissão de Certidões - Administração')
  cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
  .should('contain.text', 'Certidões Criminais')
   cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
  .should('contain.text', 'Certidões Cíveis')

    //Antes de gerar esse cenário é preciso gerar uma certidão criminal com pendências
    //Nome da parte EUGÊNIO VALDEMAR DA SILVA - MÃE MARIA DA PENHA BRITO DA SILVA - certidao_criminal_pessoa_fisica_parte_judwin_1g
    //Nome da mãe 

 cy.wait(3000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('064.447.914-05');
cy.get('span.p-button-label').click();
cy.get('[data-cy="entityTable"] td:nth-child(3)').click();
//cy.get('#pn_id_8-table td:nth-child(1) div.p-checkbox-box').click();
//cy.get('div.bg-white.ng-star-inserted').click();
//cy.get('button:nth-child(3)').click();
//cy.get('[name="justificativa"]').type('urtyurtyu');
//cy.get('p-button[label="Emitir"] span.p-button-label').click();
  })
 

   it('13 - Consultar Pendências Pessoa Física / Limpar Campos', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.get('.font-bold > .inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Certidões Criminais')
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .font-medium')
      .should('contain.text', 'Certidões Cíveis')
     cy.wait(3000)
cy.get('[data-cy="documento"]').type('132.132.132-13');
cy.get('a.underline span').click();
   })


  it('14 - Consultar Pendências Pessoa Jurídica / Validação de Label', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()

       cy.wait(3000)
cy.get('div.justify-between').click();
cy.get('[data-cy="SolicitacaoHeading"] span').should('have.text', 'Consultar Pendência das Certidões Criminais de Pessoa Jurídica');
cy.get('h3').click();
cy.get('h3').should('have.text', 'Consultar Solicitações');
cy.get('div.flex-column').click();
cy.get('label.inline-block').should('have.text', 'CNPJ');
cy.get('div.bg-white').click();
cy.get('#no-result span.block').should('have.text', 'Nenhuma solicitação encontrada');
cy.get('button.p-button').click();
cy.get('span.p-button-label').should('have.text', 'Consultar');
cy.get('a.underline span').should('have.text', 'Limpar');
  })

  it('15 - Consultar Pendências Pessoa Jurídica / Campos Obrigatórios', () => {

  cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click() 
     cy.wait(3000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('13.132.132/1321-32');
cy.get('div.validation-messages').click();
cy.get('span.p-button-label').click();
cy.get('div.validation-messages').should('have.text', '\n         CNPJ inválido. \n      ');
  })

  it('16 - Consultar Pendências Pessoa Jurídica / Emissão Sem Pendência', () => {
    
    cy.viewport(1920, 1080);
    
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
        cy.get('.alert-link').click()
        cy.wait(5000) //Digite o seu CPF e click para confirmar
        cy.get('.inline-block')
          .should('contain.text', 'Emissão de Certidões - Administração')
        cy.get('#home-logged-message')
          .should('contain.text', 'Elvio Ferreira do Nascimento')
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
        cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click() 
        /// PARA ESSE CENÁRIO É PRECISO INFORMAR UM CNPJ QUE NÃO EXISTE
         cy.wait(3000)
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('32.345.584/0001-80');
    cy.get('span.p-button-label').click();
    cy.get('div.break-words').click();
    //cy.get('div.break-words').should('have.text', 'Não foram encontradas solicitações para o CNPJ informado.');
    cy.get('div.break-words').click();
    cy.get('div.break-words').click();
    cy.get('div.break-words').should('have.text', 'Não existe solicitação realizada na WEB.');
  })

  it('17 - Consultar Pendências Pessoa Jurídica / Emissão', () => {
    
    cy.viewport(1920, 1080);
    
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
        cy.get('.alert-link').click()
        cy.wait(5000) //Digite o seu CPF e click para confirmar
        cy.get('.inline-block')
          .should('contain.text', 'Emissão de Certidões - Administração')
        cy.get('#home-logged-message')
          .should('contain.text', 'Elvio Ferreira do Nascimento')
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
        cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click() 
        /// **********PARA ESSE CENÁRIO É PRECISO CRIAR UMA CERTIDÃO PARA PESSOA JURÍDICA EM CERTIDÕES CRIMINAIS COM INFORMAÇÕES FAKER
    
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('41.653.945/0001-90');
    //cy.get('span.p-button-label').click();
    //cy.get('[data-cy="entityTable"] td:nth-child(3)').click();
    cy.get('span.p-button-label').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(1) span.p-button-label').click();
  })

  it('18 - Consultar Pendências Pessoa Jurídica / Emissão sem Justificativa', () => {
    
    cy.viewport(1920, 1080);
      cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
      cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
      cy.get('.alert-link').click()
      cy.wait(5000) //Digite o seu CPF e click para confirmar
      cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
      cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
      cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
      cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click() 
    
        /// **********PARA ESSE CENÁRIO É PRECISO CRIAR UMA CERTIDÃO PARA PESSOA JURÍDICA EM CERTIDÕES CRIMINAIS COM INFORMAÇÕES FAKER
    
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('41.653.945/0001-90');
    cy.get('span.p-button-label').click();
    //cy.get('[data-cy="entityTable"] td:nth-child(3)').click();
    //cy.get('div.flex.gap-2 button:nth-child(1)').click();
    //cy.get('div.justify-content-end').click();
    //cy.get('[name="justificativa"]').click();
    //cy.get('[name="justificativa"]').type('123456');
    //cy.get('[name="justificativa"]').click();
    //cy.get('[name="justificativa"]').clear();
    //cy.get('div.p-dialog-content').click();
    //cy.get('small.p-error').should('have.text', '\n      A justificativa deve ter pelo menos 1 caractere\n    ');
    cy.get('div.break-words').should('have.text', 'Não há solicitação pendente para o CNPJ informado.');
  })

it('19 - Consultar Pendências Pessoa Jurídica / Emissão Nada Consta em Tramitação sem Justificativa', () => {
    
    cy.viewport(1920, 1080);
      cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
      cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
      cy.get('.alert-link').click()
      cy.wait(5000) //Digite o seu CPF e click para confirmar
      cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
      cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
      cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
      cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('24.417.065/0001-03');
    cy.get('span.p-button-label').click();
    //cy.get('[data-cy="entityTable"] td:nth-child(3)').click();
    //cy.get('div.flex.gap-2 button:nth-child(2)').click();
    //cy.get('[name="justificativa"]').type('jghjhgfjhgfj');
    //cy.get('p-button[label="Emitir"] span.p-button-label').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(3)').click();
    cy.get('#pn_id_8-table tr:nth-child(1) td:nth-child(1) p-checkbox.p-element div.p-checkbox div.p-checkbox-box').click();
    cy.get('#pn_id_8-table tr:nth-child(1) span.font-bold').click();
    cy.get('#pn_id_8-table svg.p-checkbox-icon').click();
    cy.get('#pn_id_8-table tr:nth-child(2) td.whitespace-nowrap').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(2) td:nth-child(3)').click();
    cy.get('#pn_id_8-table tr:nth-child(1) td:nth-child(1) p-checkbox.p-element div.p-checkbox div.p-checkbox-box').click();
    cy.get('div.flex.ng-star-inserted button:nth-child(2)').click();
    cy.get('div.justify-content-end').click();
    //cy.get('div.p-dialog-content').click();
    //cy.get('small.p-error').should('have.text', '\n      A justificativa deve ter pelo menos 1 caractere\n    ');
    
})

it('20 - Consultar Pendências Pessoa Jurídica / Emissão Certidão Positiva sem Justificativa', () => {
    
    cy.viewport(1920, 1080);
      cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
      cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
      cy.get('.alert-link').click()
      cy.wait(5000) //Digite o seu CPF e click para confirmar
      cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
      cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
      cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
      cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('24.417.065/0001-03');
    cy.get('span.p-button-label').click();
    //cy.get('[data-cy="entityTable"] td:nth-child(1)').click();
    //cy.get('#pn_id_8-table tr:nth-child(1) td:nth-child(1) p-checkbox.p-element div.p-checkbox div.p-checkbox-box').click();
    //cy.get('div.flex.gap-2 button:nth-child(1)').click();
    //cy.get('[name="justificativa"]').click();
    //cy.get('[name="justificativa"]').type('12345');
    //cy.get('[name="justificativa"]').click();
    //cy.get('div.p-dialog-mask').click();
    //cy.get('[name="justificativa"]').clear();
    //cy.get('div.p-dialog-content').click();
    //cy.get('small.p-error').should('have.text', '\n      A justificativa deve ter pelo menos 1 caractere\n    ');
    cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(3)').click();
    cy.get('#pn_id_8-table tr:nth-child(1) td.whitespace-nowrap').click();
    cy.get('#pn_id_8-table tr:nth-child(2) td.whitespace-nowrap').click();
    cy.get('#pn_id_8-table tr:nth-child(2) div.p-checkbox-box').click();
    cy.get('#pn_id_8-table tr:nth-child(2) td:nth-child(3)').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(2) td:nth-child(3)').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(2) td:nth-child(1)').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(3) td:nth-child(1)').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(5) td:nth-child(2)').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(1) span.font-bold').click();
    cy.get('#pn_id_8-table tr:nth-child(3) span.font-bold').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(9) td:nth-child(2)').click();
    cy.get('#pn_id_8-table tr:nth-child(1) td.whitespace-nowrap').click();
    cy.get('#pn_id_8-table tr:nth-child(4) td:nth-child(3)').click();
    cy.get('#pn_id_8-table tr:nth-child(6) div.p-checkbox-box').click();
    cy.get('div.flex.ng-star-inserted button:nth-child(3)').click();
})


  it('21 - Consultar Pendências Pessoa Jurídica / Limpar Campos', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .font-medium').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click() 
     cy.wait(3000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('72.670.135/0001-75');
cy.get('span.p-button-label').click();
cy.get('[data-cy="entityTable"] td:nth-child(3)').click();
cy.get('div.ng-star-inserted > div.justify-end > div.items-center > a.underline > span').click();
  })

    it('22 - Consultar Certidões / Validação de Label', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="CertidaoHeading"] > span')
         .should('contain.text', 'Certidões Criminais')
    cy.get('.px-6 > .flex > .p-component')
        .should('contain.text', 'Filtros')
    cy.get('h3')
     .should('contain.text', 'Busca por filtro')
    cy.get('.grid > :nth-child(1) > .flex > .inline-block')
       .should('contain.text', 'Número da Certidão')
    cy.get(':nth-child(2) > .flex > .inline-block')
        .should('contain.text', 'Cód. de Autenticação')
    cy.get('.p-dropdown-label')
        .should('contain.text', 'CPF')
    cy.get('.justify-end > .flex > .p-component')
        .should('contain.text', 'Consultar')
    cy.get('.flex > .text-primary')
        .should('contain.text', 'Limpar Todos')
         cy.wait(3000)
       
  
  })

  it('23 - Consultar Certidões / Campos Obrigatórios', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
  cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
   cy.get('.justify-end > .flex > .p-component').click()
   cy.get('.p-toast-message-content')
     .should('be.visible')
       .and('contain.text', 'Para realizar a consulta informe ao menos um dos três itens: 1-Número da certidão e o código de autenticação; 2-CPF; 3-CNPJ')
   cy.get('.p-toast-message-content')
    .should('be.visible')
     .and('contain.text', 'Para realizar a consulta informe ao menos um dos três itens: 1-Número da certidão e o código de autenticação; 2-CPF; 3-CNPJ')
 // cy.get('.p-ripple').click()
  cy.get('.ng-tns-c3576075022-4.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
  cy.wait(1000)
 // cy.get('.p-ripple').click()
  //cy.get('.p-ripple').click()
  //cy.get('.ng-tns-c3576075022-5.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
  
   ///cy.get('.p-ripple').click()
   
  cy.get('[data-cy="numeroCertidao"]').type('1234567891')
    cy.get('.justify-end > .flex > .p-component').click()
    cy.get('.p-toast-message-content')
      .should('be.visible')
            .and('contain.text', 'Para realizar a consulta informe o número da certidão e o código de autenticação')
    cy.wait(1000)
    cy.get('.justify-end > .flex > .text-primary > span').click()
    //cy.get('.ng-tns-c3576075022-6.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
    cy.get('.p-ripple').click()
    cy.wait(1000)
    //cy.get('.ng-tns-c3576075022-7.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
    //cy.wait(1000)
    //cy.get('.ng-tns-c3576075022-8.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
    // cy.wait(1000)
   // cy.get('.p-ripple').click()
    cy.get('[data-cy="numeroAutenticidade"]').type('111111111111')
   cy.get('.justify-end > .flex > .p-component').click()
   cy.get('.p-toast-message-content')
      .should('be.visible')
            .and('contain.text', 'Para realizar a consulta informe o número da certidão e o código de autenticação') 
    cy.get('.p-toast-message-content')
      .should('be.visible')
            .and('contain.text', 'Para realizar a consulta informe o número da certidão e o código de autenticação')
    //cy.get('.p-ripple').click()
    cy.get('.p-ripple').click()
    //cy.get('.ng-tns-c3576075022-9.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
    cy.wait(1000)
   // cy.get('.ng-tns-c3576075022-10.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-ripple').click()
    //cy.wait(1000)
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_0').click()
    cy.get('[data-cy="cpfcnpj"]').type('12345678912')
    cy.get('.p-error')
     .should('contain.text', 'CPF é inválido')
    cy.get('.justify-end > .flex > .text-primary > span').click()
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1').click()
    cy.get('[data-cy="cpfcnpj"]').type('12345678891234')
     cy.get('.p-error')
     .should('contain.text', 'CNPJ é inválido')   
      cy.wait(3000)
  
  })

     it('24 - Consultar Certidões CPF / Emissão Número da Certidão e Cód. de Autenticação', () => {

   cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="numeroCertidao"]').type('0001544/2025')
    cy.get('[data-cy="numeroAutenticidade"]').type('66.VE.YQ.8H.FP.BB')
    cy.get('.justify-end > .flex > .p-component').click() 
    cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
    cy.wait(5000)  
   
  
  })

  
  it('25 - Consultar Certidões / Emissão CPF', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="cpfcnpj"]').type('58785068403') 
    cy.get('.justify-end > .flex > .p-component').click() 
    cy.wait(5000)   
  
  })

  it('26 - Consultar Certidões / Emitir e Voltar', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="numeroCertidao"]').type('0002322/2025')
    cy.get('[data-cy="numeroAutenticidade"]').type('01.VM.9R.UJ.SM.PC')
    cy.get('.justify-end > .flex > .p-component').click() 
    cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
    cy.wait(5000)  
    //cy.get('.p-ripple').click()
    // cy.wait(3000)
   
  
  })

  it('27 - Consultar Certidões CNPJ / Emissão Número da Certidão e Cód. de Autenticação', () => {

   cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="numeroCertidao"]').type('0001322/2025')
    cy.get('[data-cy="numeroAutenticidade"]').type('4S.TH.GT.64.T9.8Q')
    cy.get('.justify-end > .flex > .p-component').click() 
    cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
    cy.wait(5000)  
   
  
  })

  it('28 - Consultar Certidões / Emissão CNPJ', () => {

   cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1').click()
    cy.get('[data-cy="cpfcnpj"]').type('58.553.854/0001-85')
    cy.get('.justify-end > .flex > .p-component').click()
    cy.wait(5000) 
   // cy.get('.flex > .p-componet').click()//COMANDO ERRADO PARA GRAVAR O ERRO NA TELA

  
  })

  it('29 - Consultar Certidões / Emissão CNPJ e Voltar', () => {

   cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1').click()
   cy.get('[data-cy="cpfcnpj"]').type('61.780.681/0001-42')
   cy.get('.justify-end > .flex > .p-component').click()
   cy.wait(5000) 
  cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
   cy.wait(3000)
  //  cy.wait(2000)
 // cy.get('.p-button-icon').click()
  

  
  })

  it('30 - Consultar Certidões / Limpar Campos com CPF', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="numeroCertidao"]').type('12345672025')
    cy.get('[data-cy="numeroAutenticidade"]').type('123456789123')
    cy.get('[data-cy="cpfcnpj"]').type('73799271082')    
    cy.get('.justify-end > .flex > .text-primary > span').click()
     cy.wait(3000)
  
  })

  it('31 - Consultar Certidões / Limpar Campos com CNPJ', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="numeroCertidao"]').type('12345672025')
    cy.get('[data-cy="numeroAutenticidade"]').type('123456789123')
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1').click()
    cy.get('[data-cy="cpfcnpj"]').type('72.670.135/0001-75')
    cy.get('.justify-end > .flex > .text-primary > span').click()
     cy.wait(3000)
   

  
  })

   it('32 - Relatório de Certidões Criminais Emitidas / Validação de Label', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()  
    cy.get('.p-breadcrumb-list > :nth-child(5)')
      .should('contain.text', 'Relatório')
    cy.get('[data-cy="SolicitacaoHeading"] > span')
      .should('contain.text', 'Relatório de Certidões Criminais Emitidas')
    cy.contains('label', 'Período')
       .should('contain.text', 'Período')
    cy.get('.flex > .p-component')
       .should('contain.text', 'Consultar')
    cy.get('.text-primary > span')
       .should('contain.text', 'Limpar Campos')
        cy.wait(3000)
    
  })

  it('33 - Relatório de Certidões Criminais Emitidas / Campos Obrigatórios', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click() 
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('11111111111111111')
    cy.get('.flex > .p-component').click()
    cy.get('.p-error')
    .should('contain.text', 'Ambas as datas são obrigatórias')
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('11111111111111111')
    cy.get('.flex > .p-component').click()
    cy.get('.p-error')
    .should('contain.text', 'Ambas as datas são obrigatórias')
     cy.wait(3000)
   
    
  })
  it('34 - Relatório de Certidões Criminais Emitidas / Consultar por Período', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click() 
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('23/07/2025')
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('23/07/2025')
    cy.get('.flex > .p-component').click()
    cy.get(':nth-child(2) > .col-span-12')
     .should('contain.text', 'Total de Certidões Emitidas')
    cy.get('.mt-7 > .col-span-12')
     .should('contain.text', 'Certidões Emitidas por Servidor')
      cy.wait(3000)
    
  })

   it('35 - Relatório de Certidões Criminais Emitidas / Limpar Campos da Tela', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click() 
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('23/07/2025')
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('23/07/2025')
    cy.get('.text-primary > span').click()
      cy.wait(3000)
    
  })

  it('36 - Relatório de Certidões Criminais Emitidas / Exportar Certidões Emitidas', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click() 
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('01/08/2025')
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('26/08/2025')
    cy.get('.justify-center > .flex > .p-component').click()
    cy.get('.bg-white > :nth-child(2) > .flex > .p-component').click()
     cy.wait(3000)

cy.get('fieldset#entities:nth-of-type(1) span.p-button-label').click();
  })

  it('37 - Relatório de Certidões Criminais Emitidas / Exportar Certidões Emitidas por Servidor', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click() 
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('01/08/2025')
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('26/08/2025')
    //cy.get('.text-primary > span').click()
    cy.get('.flex > .p-component').click()
    cy.get('.mt-7 > .p-component').click()
     cy.wait(3000)
     
    
  })

  it('38 - Relatório de Certidões Criminais Emitidas / Validação de Label do Datatable das Certidões', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.get(':nth-child(1) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()  
    cy.get('.p-breadcrumb-list > :nth-child(5)')
      .should('contain.text', 'Relatório')
    cy.get('[data-cy="SolicitacaoHeading"] > span')
      .should('contain.text', 'Relatório de Certidões Criminais Emitidas')
    cy.contains('label', 'Período')
       .should('contain.text', 'Período')
    cy.get('.flex > .p-component')
       .should('contain.text', 'Consultar')
    cy.get('.text-primary > span')
       .should('contain.text', 'Limpar Campos')
       cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('01/08/2025')
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('26/08/2025')
    cy.get('.flex > .p-component').click()
    cy.get(':nth-child(2) > .col-span-12')
    .should('contain.text', 'Total de Certidões Emitidas')
    cy.get('.bg-white > :nth-child(2) > .flex > .p-component')
     .should('contain.text', 'Exportar')
    cy.get('.mt-7 > .col-span-12')
     .should('contain.text', 'Certidões Emitidas por Servidor')
     cy.get('.mt-7 > .p-component')
     .should('contain.text', 'Exportar')
      cy.wait(3000)
        
  })


})
