describe('Administração Certidões Cíveis', () => {

  /*beforeEach(() => { 

  cy.login() 

     }) */
  
it('1 - Consultar Pendências Pessoa Física / Validação de Label', () => {

cy.viewport(1920, 1080);
cy.viewport(1920, 1080);
cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/') 

cy.get('.alert-link').click()
cy.wait(8000) //Digite o seu CPF e click para confirmar
cy.get('.inline-block')
.should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
   .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
     cy.get('[data-cy="SolicitacaoHeading"] > span')
     .should('contain.text', 'Consultar Pendência das Certidões para Cíveis para Pessoa Física') 
     cy.contains('label', 'CPF')
  .should('contain.text', 'CPF')   
    cy.wait(2000)
cy.get('span.p-button-label').should('have.text', 'Consultar');
cy.get('button.p-button').should('have.text', '\n        Consultar\n      ');
cy.get('div.bg-white').click();
cy.get('#no-result span.block').should('have.text', 'Nenhuma solicitação encontrada');
  })
    
it.skip('2 - Consultar Pendências Pessoa Física / Campos Obrigatórios', () => {

  //Campos Obrigatórios
    cy.viewport(1920, 1080);
   //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
   // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
   .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
   .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('123.456.789');
cy.get('div.bg-white').click();
cy.get('small.p-error').should('have.text', ' CPF inválido. ');
})

  it.skip('3 - Consultar Pendências Pessoa Física / Pesquisar Homônimo por CPF', () => {


   cy.viewport(1920, 1080);
    // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
   cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    //certidao_civel_pessoa_fisica_processo_pje_1g_pf
    //ISNAR BARBOSA DE OLIVEIRA
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('138.201.414-72');
cy.get('span.p-button-label').click();
  })

    it.skip('4 - Consultar Pendências Pessoa Física / Pesquisar Homônimo por Nome', () => {

cy.viewport(1920, 1080);

   //  cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
   // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
    .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.wait(1000)

cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('138.201.414-72');
cy.get('span.p-button-label').click();
    })

   it.skip('5 - Consultar Pendências Pessoa Física / Pesquisar Homônimo com CPF e Nome', () => {

cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
   // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
     cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('138.201.414-72');
cy.get('span.p-button-label').click();
   })

   

   it.skip('6 - Consultar Pendências Pessoa Física / Pesquisar por CPF', () => {

cy.viewport(1920, 1080);

     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
   //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
   cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar

    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
      cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('572.424.060-21');
cy.get('button.p-button').click();
   })

   it.skip('7 - Consultar Pendências Pessoa Física / Pesquisar por CPF e Exibir', () => {

cy.viewport(1920, 1080);

    // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('572.424.060-21');
cy.get('span.p-button-label').click();
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) button.p-ripple').click();
   })

    it.skip('8 - Consultar Pendências Pessoa Física / Pesquisar por CPF, Exibir e Voltar', () => {

cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
  cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('572.424.060-21');
cy.get('span.p-button-label').click();
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) span.pi').click();
    })
    
   it.skip('9 - Consultar Pendências Pessoa Física / Pesquisar por Nome', () => {

    cy.viewport(1920, 1080);
   // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.wait(2000)

   })

    it.skip('10 - Consultar Pendências Pessoa Física / Pesquisar com CPF e Nome', () => {

cy.viewport(1920, 1080);

    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
     cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('572.424.060-21');
cy.get('span.p-button-label').click();
    })

   it.skip('11 - Consultar Pendências Pessoa Física / Pesquisar com CPF, Nome e Exibir', () => {

    cy.viewport(1920, 1080);
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 

     cy.wait(2000)

   })

    it.skip('12 - Consultar Pendências Pessoa Física / Pesquisar com CPF, Nome, Exibir e Voltar', () => {

cy.viewport(1920, 1080);
    // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
   // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 

     cy.wait(2000)
cy.get('[data-cy="documento"]').click()
cy.get('[data-cy="documento"]').type('078.041.280-02');
cy.get('button.p-button').click();

    })

    it.skip('13 - Consultar Pendências Pessoa Física / Limpar Informações', () => {

cy.viewport(1920, 1080);

    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-toggle > .font-medium').click() 
    cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('572.424.060-21');
cy.get('a.underline span').click();
    })


  it.skip('14 - Consultar Pendências Pessoa Jurídica / Validação de Label', () => {

cy.viewport(1920, 1080);

    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.contains('label', 'CNPJ')
      .should('contain.text', 'CNPJ')
    cy.wait(2000)
cy.get('div.justify-between').click();
cy.get('[data-cy="SolicitacaoHeading"] span').should('have.text', 'Consultar Pendência das Certidões para Cíveis para Pessoa Jurídica');
cy.get('span.p-button-label').should('have.text', 'Consultar');
cy.get('a.underline span').should('have.text', 'Limpar');
cy.get('div.bg-white').click();
cy.get('#no-result span.block').should('have.text', 'Nenhuma solicitação encontrada');
  })

it.skip('15 - Consultar Pendências Pessoa Jurídica / Campos Obrigatórios', () => {

cy.viewport(1920, 1080);

    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('11.111.111/1111-11');
cy.get('div.validation-messages').click();
cy.get('small.p-error').should('have.text', ' CNPJ inválido. ');
})

it.skip('16 - Consultar Pendências Pessoa Jurídica / Pesquisar por CNPJ', () => {

cy.viewport(1920, 1080);

    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('76.895.473/0001-66');
cy.get('button.p-button').click();
})

it.skip('17 - Consultar Pendências Pessoa Jurídica / Pesquisar por CNPJ e Exibir', () => {

cy.viewport(1920, 1080);

    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('12.064.156/0001-15');
cy.get('button.p-button').click();
cy.get('[data-cy="entityTable"] span.p-button-label').click();
})

it.skip('18 - Consultar Pendências Pessoa Jurídica / Pesquisar por CNPJ, Exibir e Voltar', () => {

cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('76.895.473/0001-66');
cy.get('button.p-button').click();
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) button.p-ripple').click();


})

it.skip('19 - Consultar Pendências Pessoa Jurídica / Limpar Informações', () => {

cy.viewport(1920, 1080);

     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-toggle > .font-medium').click()
    cy.wait(2000)
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('11.111.111/1111-11');
cy.get('a.underline span').click();
})

  it.skip('20 - Consultar Certidões / Validação de Label', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get('.p-breadcrumb-list > :nth-child(5)')
      .should('contain.text', 'Listagem')
    cy.get('[data-cy="CertidaoHeading"] > span')
      .should('contain.text', 'Certidões Cíveis')
    cy.get(':nth-child(2) > .flex > .inline-block')
      .should('contain.text', 'Cód. de Autenticação')
    cy.get('.p-dropdown-label')
       .should('contain.text', 'CPF')
    cy.get('.justify-end > .flex > .p-component > .p-button-label')
       .should('contain.text', 'Consultar')
    cy.get('.text-primary > span')
       .should('contain.text', 'Limpar Todos')
    cy.wait(2000)

    
})

 it.skip('21 - Consultar Certidões / Campos Obrigatórios', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    //cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    
    cy.get('[data-cy="cpfcnpj"]').type('1231321')
    cy.get('.p-error')
     .should('contain.text', 'CPF é inválido')
  
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1 > .ng-star-inserted').click()
    cy.get('[data-cy="cpfcnpj"]').type('123456')
    cy.get('.p-error')
      .should('contain.text', 'CNPJ')
    cy.get('.justify-end > .flex > .text-primary > span').click()
    
    cy.get('.justify-end > .flex > .p-component').click()
    
    cy.get('.p-toast-detail')
     .should('be.visible')
             .and('contain.text', 'Para realizar a consulta informe ao menos um dos três itens: 1-Número da certidão e o código de autenticação; 2-CPF; 3-CNPJ')
    cy.wait(2000)

    
})
it.skip('22 - Consultar Certidões / Limpar Informações', () => {

    cy.viewport(1920, 1080);
    // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    //cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click() 
    cy.get('[data-cy="cpfcnpj"]').type('1231321')
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1 > .ng-star-inserted').click()
    cy.get('[data-cy="numeroCertidao"]').type('11111111111')
    cy.get('[data-cy="numeroAutenticidade"]').type('1111111111')
    cy.get('[data-cy="cpfcnpj"]').type('76.895.473/0001-66')
    cy.get('.justify-end > .flex > .text-primary > span').click()
    cy.wait(2000)
   
    
})

it.skip('23 - Consultar Certidões / Consultar pelo CPF', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    //cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    
    cy.get('[data-cy="cpfcnpj"]').type('02112357417')
    cy.get('.justify-end > .flex > .p-component').click()
    
})
it.skip('24 - Consultar Certidões / Consultar pelo CPF e Exibir', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    //cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    
    cy.get('[data-cy="cpfcnpj"]').type('506.898.776-09')
    cy.get('.justify-end > .flex > .p-component').click()
    cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
    cy.wait(2000)
   // cy.get('.p-ripple').click()
   // cy.wait(2000)

    
})

it.skip('25 - Consultar Certidões / Consultar pelo CPF, Exibir e Voltar', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    //cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    
    cy.get('[data-cy="cpfcnpj"]').type('506.898.776-09')
    cy.get('.justify-end > .flex > .p-component').click()
    cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
    cy.wait(2000)
   // cy.get('.p-ripple').click()
   // cy.wait(2000)

    
})

it.skip('26 - Consultar Certidões / Consultar pelo CNPJ', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    //cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1').click()
    cy.get('[data-cy="cpfcnpj"]').type('76.895.473/0001-66')
    cy.get('.justify-end > .flex > .p-component').click()
    

})

it.skip('27 - Consultar Certidões / Consultar pelo CNPJ e Exibir', () => {

cy.viewport(1920, 1080);
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
   // cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1').click()
    cy.get('[data-cy="cpfcnpj"]').type('33.217.425/0001-06')
    cy.get('.justify-end > .flex > .p-component').click()
    cy.wait(3000)
    cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
    cy.wait(3000)

})

it.skip('28 - Consultar Certidões / Consultar pelo CNPJ, Exibir e Voltar', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-toggle > .font-medium').click()
    cy.get('.p-dropdown-trigger').click()
    cy.get('#cpfCnpjCampo_1').click()
    cy.get('[data-cy="cpfcnpj"]').type('76.895.473/0001-66')
    cy.get('.justify-end > .flex > .p-component').click()
    cy.wait(3000)
    //cy.get('[data-cy="entityTable"] > :nth-child(1) > a').click()
    cy.get('.p-datatable-tbody > :nth-child(2) > :nth-child(1) > a').click()
    cy.wait(3000)
  // cy.get('.p-ripple').click()
   // cy.wait(3000) 

    

})

 it.skip('29 - Relatório de Certidões Cíveis Emitidas / Validação de Label', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get('.inline-block')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
      cy.wait(2000)
      cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
      cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
      cy.get('.p-breadcrumb-list > :nth-child(5)')
       .should('contain.text', 'Relatorio-civel')
      cy.get('[data-cy="SolicitacaoHeading"] > span')
       .should('contain.text', 'Relatório de Certidões Cíveis Emitidas')
     cy.contains('label', 'Período')
      .should('contain.text', 'Período')
     cy.get('.flex > .p-component')
      .should('contain.text', 'Consultar')
      cy.get('.justify-center > .flex')
      .should('contain.text', 'Limpar Campos')  
     cy.wait(2000)

    
})

 it.skip('30 - Relatório de Certidões Cíveis Emitidas / Campos Obrigatórios', () => {

    cy.viewport(1920, 1080);
     //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
   // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
   
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').click()
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('01072025')
    cy.get('.flex > .p-component').click()
    cy.get('.p-error')
        .should('contain.text', 'Ambas as datas são obrigatórias') 
    cy.wait(2000)
     

    
})

it.skip('31 - Relatório de Certidões Cíveis Emitidas / Pesquisa por Período', () => {

    cy.viewport(1920, 1080);
    // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('04/06/2025')
        cy.wait(2000)
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('04/06/2025')
    cy.wait(2000)
    cy.get('.flex > .p-component').click()
     
    
})

it.skip('32 - Relatório de Certidões Cíveis Emitidas / Pesquisa e Validar Datatable (Label)', () => {

    cy.viewport(1920, 1080);
    // cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    //cy.visit('https://homologacao-certidoesunificadasadmin.app.tjpe.gov.br/') 
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    //cy.wait(2000)
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('04/08/2025')
        cy.wait(2000)
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('04/08/2025')
    cy.wait(2000)
    cy.get('.flex > .p-component').click()
    cy.get(':nth-child(2) > .col-span-12')
    .should('contain.text', 'Total de Certidões Emitidas')
    cy.get(':nth-child(2) > .p-datatable > .p-datatable-thead > tr > :nth-child(2) > .font-bold')
    .should('contain.text', 'Externo')
    cy.get(':nth-child(2) > .p-datatable > .p-datatable-thead > tr > :nth-child(3) > .font-bold')
    .should('contain.text', 'Interno')
    cy.get(':nth-child(2) > .p-datatable > .p-datatable-thead > tr > :nth-child(4) > .font-bold')
    .should('contain.text', 'Total')
    cy.get(':nth-child(2) > .p-datatable > .p-datatable-tbody > :nth-child(1) > :nth-child(1)')
    .should('contain.text', 'Física')
    cy.get('.p-datatable-tbody > :nth-child(2) > :nth-child(1)')
    .should('contain.text', 'Jurídica')
    cy.get('.p-datatable-tbody > :nth-child(3) > :nth-child(1)')
    .should('contain.text', 'Total')
    cy.get('.bg-white > :nth-child(2) > .flex > .p-component > .p-button-label')
    .should('contain.text', 'Exportar')
    cy.get(':nth-child(3) > .col-span-12')
    .should('contain.text', 'Certidões Emitidas por Servidor')
    //cy.get(':nth-child(3) > .p-datatable > .p-datatable-thead > tr > .w-1\/2 > .font-bold')
    //cy.contains('label', 'Servidor')
    .should('contain.text', 'Servidor')
    cy.get(':nth-child(3) > .p-datatable > .p-datatable-thead > tr > :nth-child(2) > .font-bold')
    .should('contain.text', 'Física')
    cy.get(':nth-child(3) > .p-datatable > .p-datatable-thead > tr > :nth-child(3) > .font-bold')
    .should('contain.text', 'Jurídica')
    cy.get(':nth-child(3) > .p-datatable > .p-datatable-thead > tr > :nth-child(4) > .font-bold')
    .should('contain.text', 'Total')
    cy.get('.bg-white > :nth-child(3) > .p-component')
     .should('contain.text', 'Exportar')     
    
})

it.skip('33 - Relatório de Certidões Cíveis Emitidas / Pesquisa por Período e Exportar Total', () => {

    cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('04/08/2025')
        cy.wait(2000)
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('04/08/2025')
    cy.wait(2000)
    cy.get('.flex > .p-component').click()
    cy.get('#entities > .flex > .p-component').click()


})
it.skip('34 - Relatório de Certidões Cíveis Emitidas / Pesquisa por Período e Exportar Servidor', () => {

    cy.viewport(1920, 1080);
  
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/certidao')
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(5000) //Digite o seu CPF e click para confirmar
    cy.get(':nth-child(2) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-toggle > .font-medium').click()
    cy.get('#field_dataInicio > .input-tamanho > .p-inputtext').type('04/08/2025')
        cy.wait(2000)
    cy.get('#field_dataFim > .input-tamanho > .p-inputtext').type('04/08/2025')
    cy.wait(2000)
    cy.get('.flex > .p-component').click()
    cy.get('.bg-white > :nth-child(3) > .p-component').click()


})


 
 })
