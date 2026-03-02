describe('LegJud | Menu Prcessos de 1º Grau', () => {

   it.only( '1 - Consultar Processos de 1º Grau | Validar Label', () => {
    
    //Comarca
    
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
    cy.get('li:nth-of-type(1) [data-cy="adminMenu"] span.font-medium').click();
    cy.get('[data-cy="navbar"] a[routerlink="/processo-1-grau"] span.font-medium').click();
    cy.get('div.flex-col.justify-between').click();
    cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Consulta de Processos do Judwin 1º Grau');
    cy.get('div.bg-white').click();
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('#pn_id_2_tab_1').click();
    cy.get('#pn_id_2_tab_1').click();
    cy.get('#pn_id_2_tab_1').should('have.text', 'Vara');
    cy.get('#pn_id_2_tab_2').click();
    cy.get('#pn_id_2_tab_2').should('have.text', 'Partes');
    //cy.get('#pn_id_2_tab_3').click();
    
    //cy.get('#pn_id_2_tab_3').should('have.text', 'Número Antigo');
   // cy.get('#pn_id_2_tabpanel_3 label.inline-block').click();
    //y.get('#pn_id_2_tabpanel_3 label.inline-block').should('have.text', 'Número Antigo');
    cy.get('#pn_id_2_tabpanel_3 a.underline').should('have.text', '\n                  Limpar Todos\n                ');
    cy.get('#pn_id_2_tabpanel_3 span.p-button-label').should('have.text', 'Aplicar');
    cy.get('#pn_id_2_tab_0').click();
    cy.get('#pn_id_2_tabpanel_0 label.inline-block').should('have.text', 'NPU');
    cy.get('#pn_id_2_tab_1').click();
    cy.get('#pn_id_2_tabpanel_1 label[for="field_idComarca"]').should('have.text', 'Comarca');
    cy.get('#pn_id_2_tabpanel_1 label[for="field_idTipoVara"]').should('have.text', 'Tipo Vara');
    cy.get('#pn_id_2_tabpanel_1 label[for="field_idVara"]').should('have.text', 'Vara');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(4) label.inline-block').should('have.text', 'Data Autuação Inicial');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(5) label.inline-block').should('have.text', 'Data Autuação Final');
    cy.get('#pn_id_2_tab_2').click();
    cy.get('#pn_id_2_tabpanel_2 label[for="field_nome"]').should('have.text', 'Nome');
    cy.get('#pn_id_2_tabpanel_2 label[for="field_cpfCnpj"]').should('have.text', 'CPF/CNPJ');
    cy.get('#pn_id_2_tabpanel_2 label[for="field_dataAutuacaoInicial_partes"]').should('have.text', 'Data Autuação Inicial');
    cy.get('#pn_id_2_tabpanel_2 label[for="field_dataAutuacaoFinal_partes"]').should('have.text', 'Data Autuação Final');
    cy.get('#pn_id_2_tab_3').click();
    
   })

   it( '2 - Movimentação Individual | Validar Label', () => {
    
    //Comarca
    
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
    cy.get('li:nth-of-type(1) [data-cy="adminMenu"] span.font-medium').click();
    cy.get('[data-cy="navbar"] a[routerlink="/movimentacao-individual-1-grau"] span.font-medium').click();
    cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Movimentação Individual');
    cy.get('label.inline-block').should('have.text', 'NPU:');
    cy.get('span.p-button-label').should('have.text', 'Aplicar');
    cy.get('a.underline span').should('have.text', 'Limpar');
   })

   it( '3 - Guia de Remessa | Validar Label', () => {
    
    //Comarca
    
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
    
    cy.get('li:nth-of-type(1) [data-cy="adminMenu"] span.font-medium').click();
    cy.get('[data-cy="navbar"] a[routerlink="/guia-remessa-1-grau"] span.font-medium').click();
    cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Guia de Remessa');
    cy.get('button.h-full span.p-button-label').should('have.text', 'Cadastrar Nova Guia de Remessa');
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('#pn_id_2_tab_0').should('have.text', 'NPU');
    cy.get('#pn_id_2_tabpanel_0 label.inline-block').should('have.text', 'NPU');
    cy.get('#pn_id_2_tab_1').click();
    cy.get('#pn_id_2_tabpanel_1 label[for="field_ano-guia"]').should('have.text', 'Ano da Guia');
    cy.get('#pn_id_2_tabpanel_1 label[for="field_numero_guia"]').should('have.text', 'Número da Guia');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(3) > div.flex > label.inline-block').should('have.text', 'Origem');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(4) label.inline-block').should('have.text', 'Destino');
    cy.get('#pn_id_2_tabpanel_1 a.underline span').should('have.text', 'Limpar Todos');
    cy.get('#pn_id_2_tabpanel_1 span.p-button-label').should('have.text', 'Aplicar');
   })

it( '4 - Recebimento de Remessa | Validar Label', () => {
    
    //Comarca
    
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
    
    cy.get('li:nth-of-type(1) [data-cy="adminMenu"] span.font-medium').click();
    cy.get('[data-cy="navbar"] a[routerlink="/recebimento-remessa-1-grau"] span.font-medium').click();
    cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Recebimento de Remessa');
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('#pn_id_2_tab_0').should('have.text', 'NPU');
    cy.get('#pn_id_2_tabpanel_0 label.inline-block').should('have.text', 'NPU');
    cy.get('#pn_id_2_tab_1').click();
    cy.get('#pn_id_2_tab_1').should('have.text', 'Guia de Remessa');
    cy.get('#pn_id_2_tabpanel_1 label[for="field_ano-guia"]').should('have.text', 'Ano da Guia');
    cy.get('#pn_id_2_tabpanel_1 label[for="field_numero_guia"]').click();
    cy.get('#pn_id_2_tabpanel_1 label[for="field_numero_guia"]').should('have.text', 'Número da Guia');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(3) > div.flex > label.inline-block').should('have.text', 'Origem');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(4) label.inline-block').click();
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(4) label.inline-block').should('have.text', 'Destino');
    cy.get('#pn_id_2_tabpanel_1 a.underline span').should('have.text', 'Limpar Todos');
    cy.get('#pn_id_2_tabpanel_1 span.p-button-label').should('have.text', 'Aplicar');
})
it( '5 - Remessa Carga ao Advogado | Validar Label', () => {
    
    //Comarca
    
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
    
    
    cy.get('li:nth-child(1) [data-cy="adminMenu"]').click();
    cy.get('[data-cy="navbar"] a[routerlink="/remessa-devolucao-advogado-1-grau"] span.font-medium').click();
    cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Remessa Carga ao Advogado 1º Grau');
    cy.get('label.inline-block').should('have.text', 'NPU:');
    cy.get('span.p-button-label').should('have.text', 'Aplicar');
    cy.get('a.underline span').should('have.text', 'Limpar');
})

})