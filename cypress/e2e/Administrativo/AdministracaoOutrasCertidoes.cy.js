describe('Outras Certidões', () => {
  it.skip('1 - Consultar Pendências Fins Eleitorias / Validação de Label', () => {

/*beforeEach(() => { 
  cy.login() 
     }) */

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
    cy.get('.p-breadcrumb-list > :nth-child(5)')
       .should('contain.text', 'Pendências Fins Eleitorais')
    cy.get('[data-cy="SolicitacaoHeading"] > span')
       .should('contain.text', 'Consultar Pendência das Certidões para Fins Eleitorais')
    cy.get('h3')
       .should('contain.text', 'Consultar')
    cy.contains('label', 'CPF')
       .should('contain.text', 'CPF')
    cy.get('#no-result > .block')
        .should('contain.text', 'Nenhuma solicitação encontrada')
cy.get('a.underline span').should('have.text', 'Limpar');
  })

it.skip('2 - Consultar Pendências Fins Eleitorais / Campos Obrigatórios', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()

cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('123.456.789-12');
cy.get('div.validation-messages').click();
cy.get('small.p-error').should('have.text', ' CPF inválido. ');
})

it.skip('3 - Consultar Pendências Fins Eleitorais / Pesquisar Certidão por Nome', () => {

    cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
   // cy.get('[data-cy="nome"]').type('ELIANE SOCORRO DA SILVA')
  //  cy.get('.flex-column > .ml-2').click()
   // cy.get(':nth-child(3) > .col-span-12 > .flex > :nth-child(1)').click()
   // cy.get(':nth-child(1) > .p-button-label').click()
    //cy.get('.p-button-secondary').click()
   // cy.get('legend')
   // .should('contain.text', 'Dados da Parte')
   
   
   
})

it.skip('4 - Consultar Pendências Fins Eleitorais / Pesquisar Certidão por CPF e Nome', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('025.690.614-92');
cy.get('span.p-button-label').click();
})


it.skip('5 - Consultar Pendências Fins Eleitorais / Pesquisar Certidão por CPF', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('025.690.614-92');
cy.get('span.p-button-label').click();
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(2)').click();
})

it.skip('6 - Consultar Pendências Fins Eleitorais / Limpar Informações da Tela', () => {

cy.viewport(1920, 1080);
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
    .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('025.690.614-92');
cy.get('span.p-button-label').click();
cy.get('a.underline span').click();
})

it.skip('7 - Consultar Pendências Fins Eleitorais / Cancelar Informações da Tela', () => {

cy.viewport(1920, 1080);


    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
    .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('025.690.614-92');
cy.get('span.p-button-label').click();
cy.get('a.underline span').click();
})

it.skip('8 - Consultar Pendências Fins Eleitorais / Emissão Certidão Negativa - Nada consta', () => {
    
    cy.viewport(1920, 1080);
    
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
        cy.get('.alert-link').click()
        cy.wait(10000) //Digite o seu CPF e click para confirmar
        cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
        cy.get('#home-logged-message')
          .should('contain.text', 'Elvio Ferreira do Nascimento')
        cy.wait(2000)
        cy.get('[data-cy="navbar"] > .font-bold')
          .should('contain.text', 'Emissão de Certidões - Administração')
        cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
        //Para realizar esse cenário é necessário antes gerar uma certidão eleitoral - certidao_fins_eleitorais_processo_dw_fins_eleitorais
        //CPF - 31214983049
        //Nome - pereira de oliveira silva santos
    cy.get('[data-cy="documento"]').click();
    cy.get('[data-cy="documento"]').type('312.149.830-49');
    cy.get('span.p-button-label').click();
    //cy.get('tr[data-cy="entityTable"]:nth-of-type(4) td:nth-child(5)').click();
    //cy.get('div.flex.gap-2 button:nth-child(1)').click();
    //cy.get('[name="justificativa"]').type('asrfweqreqwrwer');
    //cy.get('p-button[label="Emitir"] span.p-button-label').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(2)').click();
    cy.get('#pn_id_8-table div.p-checkbox-box').click();
    cy.get('#pn_id_8-table div.p-highlight').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(2) td:nth-child(2)').click();
    cy.get('#pn_id_8-table div.p-checkbox-box').click();
    cy.get('tr[data-cy="entityTable"]:nth-of-type(3) span.font-bold').click();
    cy.get('#pn_id_8-table th:nth-child(3)').click();
    cy.get('#pn_id_8-table div.p-checkbox-box').click();
})

it.skip('9 - Consultar Pendências Fins Eleitorais / Emissão Certidão Negativa - Nada consta em tramitação', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()
    //Para realizar esse cenário é necessário antes gerar uma certidão eleitoral - certidao_fins_eleitorais_processo_dw_fins_eleitorais
    //CPF - 03937113401
    //Nome - FRANCISCO BEZERRA COSTA
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('039.371.134-01');
cy.get('button.p-button').click();
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(4)').click();
cy.get('#pn_id_8-table td:nth-child(1) div.p-checkbox-box').click();
cy.get('div.flex.gap-2 button:nth-child(2)').click();
cy.get('[name="justificativa"]').type('13132132131321');
cy.get('p-button[label="Emitir"] span.p-button-label').click();
})

///Continuar aq
it.skip('10 - Consultar Pendências Fins Eleitorais / Emissão Certidão Negativa - Certidão Positiva', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()

    //Para realizar esse cenário é necessário antes gerar uma certidão eleitoral - certidao_fins_eleitorais_processo_dw_fins_eleitorais

    //CPF - 04599472492

    //Nome - ELIANE SOCORRO DA SILVA

cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('045.994.724-92');
cy.get('button.p-button').click()
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(5)').click();
cy.get('#pn_id_8-table td:nth-child(1) div.p-checkbox-box').click();
cy.get('div.flex.gap-2 button:nth-child(3)').click();
cy.get('[name="justificativa"]').type('jghfjgfhjghfjfghjgfhj');
cy.get('p-button[label="Emitir"] button.p-ripple').click();
})

it.skip('11 - Consultar Pendências Fins Eleitorais / Emissão Certidão Negativa - Certidão Positiva - Por Ação', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()

    //Para realizar esse cenário é necessário antes gerar uma certidão eleitoral - certidao_fins_eleitorais_processo_dw_fins_eleitorais
    //CPF - 04599472492
    //Nome - ELIANE SOCORRO DA SILVA
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('045.994.724-92');
cy.get('span.p-button-label').click();
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) span.pi').click();
})

it.skip('12 - Consultar Pendências Fins Eleitorais / Emissão Certidão Negativa - Botão Limpar Ocorrência', () => {

cy.viewport(1920, 1080);

    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('.alert-link').click()
    cy.wait(10000) //Digite o seu CPF e click para confirmar
    cy.visit('https://teste-certidoesunificadasadmin.app.tjpe.gov.br/')
    cy.get('#home-logged-message')
      .should('contain.text', 'Elvio Ferreira do Nascimento')
    cy.wait(2000)
    cy.get('[data-cy="navbar"] > .font-bold')
      .should('contain.text', 'Emissão de Certidões - Administração')
    cy.get(':nth-child(3) > .dropdown > .nav-bar-item > .pi-angle-down').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > .padding-li-item > .dropdown-toggle > .font-medium').click()

    //Para realizar esse cenário é necessário antes gerar uma certidão eleitoral - certidao_fins_eleitorais_processo_dw_fins_eleitorais
    //CPF - 04599472492
    //Nome - ELIANE SOCORRO DA SILVA
cy.get('[data-cy="documento"]').click();
cy.get('[data-cy="documento"]').type('045.994.724-92');
cy.get('span.p-button-label').click();
cy.get('tr[data-cy="entityTable"]:nth-of-type(1) td:nth-child(3)').click();
cy.get('div.ng-star-inserted > div.justify-end > div.items-center > a.underline > span').click();
})


})