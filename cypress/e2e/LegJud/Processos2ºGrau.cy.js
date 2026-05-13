describe('LegJud | Menu Prcessos de 2º Grau', () => {

   it.skip( '1 - Consultar Processos de 2º Grau | Validar Label', () => {
    

    
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
    
    cy.get('li:nth-of-type(2) [data-cy="adminMenu"] span.font-medium').click();
    cy.get('[data-cy="navbar"] a[routerlink="/processo-2-grau"] span.font-medium').click();
    cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Consulta de Processos do Judwin 2º Grau');
    cy.get('h3').should('have.text', 'Busca por filtros');
    cy.get('#pn_id_2_tab_0').should('have.text', 'NPU');
    cy.get('#pn_id_2_tabpanel_0 div:nth-child(1) > div.flex > label.inline-block').should('have.text', 'NPU');
    cy.get('#pn_id_2_tabpanel_0 div:nth-child(2) > div.flex > label.inline-block').should('have.text', 'Número');
    cy.get('#pn_id_2_tab_1').click();
    cy.get('#pn_id_2_tab_1').should('have.text', 'Órgão Julgador');
    cy.get('#pn_id_2_tabpanel_1 label[for="field_idOrgaoJulgador"]').should('have.text', 'Órgão Julgador');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(2) > div.flex > label.inline-block').should('have.text', 'Data Autuação Inicial');
    cy.get('#pn_id_2_tabpanel_1 div:nth-child(3) > div.flex > label.inline-block').should('have.text', 'Data Autuação Final');
    cy.get('#pn_id_2_tab_2').click();
    cy.get('#pn_id_2_tab_2').should('have.text', 'Partes');
    cy.get('#pn_id_2_tabpanel_2 label[for="field_nome"]').should('have.text', 'Nome');
    cy.get('#pn_id_2_tabpanel_2 label[for="field_cpfCnpj"]').should('have.text', 'CPF/CNPJ');
    cy.get('#pn_id_2_tabpanel_2 label[for="field_dataAutuacaoInicial_partes"]').should('have.text', 'Data Autuação Inicial');
    cy.get('#pn_id_2_tabpanel_2 label[for="field_dataAutuacaoFinal_partes"]').should('have.text', 'Data Autuação Final');
    cy.get('#pn_id_2_tabpanel_2 a.underline span').should('have.text', 'Limpar Todos');
    cy.get('#pn_id_2_tabpanel_2 span.p-button-label').should('have.text', 'Aplicar');
   })

    it.skip( '2 - Remessa Carga ao Advogado | Validar Label', () => {
          
          
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
          cy.get('li:nth-of-type(2) [data-cy="adminMenu"] span.font-medium').click();
          cy.get('[data-cy="navbar"] a[routerlink="/remessa-devolucao-advogado-2-grau"] span.font-medium').click();
          cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Remessa Carga ao Advogado 2º Grau');
          
      cy.get('label.inline-block').click();
      cy.get('label.inline-block').should('have.text', 'Buscar por:');
      cy.get('label[for="rbNpu"]').should('have.text', 'NPU');
      cy.get('label[for="rbCodigo"]').should('have.text', 'Número');
      cy.get('span.p-button-label').should('have.text', 'Aplicar');
      cy.get('a.underline span').should('have.text', 'Limpar');
    })


    it.skip( '3 - Consultar Processos de 2º Grau | Movimentação Individual validar Label', () => {
          
      
          
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get(':nth-child(2) > [data-cy="adminMenu"] > .ml-auto').click()
      
      
      cy.get('[data-cy="navbar"] a[routerlink="/movimentacao-individual-2-grau"] span.font-medium').click();
      cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Movimentação Individual do 2º Grau');
      cy.get('label.inline-block').should('have.text', 'Buscar por:');
      cy.get('label[for="rbNpu"]').should('have.text', 'NPU');
      cy.get('label[for="rbCodigo"]').should('have.text', 'Número');
      cy.get('span.p-button-label').should('have.text', 'Aplicar');
      cy.get('a.underline span').should('have.text', 'Limpar');
    })

     it.skip( '4 - Consultar Processos de 2º Grau | Guia de Remessa validar Label', () => {
          
      
          
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get(':nth-child(2) > [data-cy="adminMenu"] > .ml-auto').click()
      
      
      cy.get('[data-cy="navbar"] a[routerlink="/movimentacao-individual-2-grau"] span.font-medium').click();
      cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Movimentação Individual do 2º Grau');
      cy.get('label.inline-block').should('have.text', 'Buscar por:');
      cy.get('label[for="rbNpu"]').should('have.text', 'NPU');
      cy.get('label[for="rbCodigo"]').should('have.text', 'Número');
      cy.get('span.p-button-label').should('have.text', 'Aplicar');
      cy.get('a.underline span').should('have.text', 'Limpar');
      cy.get('li:nth-of-type(2) [data-cy="adminMenu"] span.ml-auto').click();
      cy.get('[data-cy="navbar"] a[routerlink="/guia-remessa-2-grau"] span.font-medium').click();
      cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Guia de Remessa do 2º Grau');
      cy.get('h3').should('have.text', 'Busca por filtros');
      cy.get('button.h-full span.p-button-label').should('have.text', 'Cadastrar Nova Guia de Remessa');
      cy.get('#pn_id_5_tab_0').should('have.text', 'NPU');
      cy.get('#pn_id_5_tab_1').should('have.text', 'Guia de Remessa');
      cy.get('#pn_id_5_tabpanel_0 label[for="radioNpu"]').should('have.text', 'Buscar por NPU');
      cy.get('#pn_id_5_tabpanel_0 label[for="radioNumero"]').should('have.text', 'Buscar por Número');
      cy.get('#pn_id_5_tabpanel_0 label.inline-block').should('have.text', 'NPU');
      cy.get('#pn_id_5_tabpanel_0 small.font-medium').should('have.text', 'É necessário informar o NPU ou o número do processo para realizar a consulta. Ao realizar a pesquisa pelo número do processo, digite-o sem máscara, traços ou barras. Ex.: Para 12569-2 digite 12569200 ou para 12569-2/01 digite 12569201.');
      cy.get('#pn_id_5_tabpanel_0 a.underline span').should('have.text', 'Limpar Todos');
      cy.get('#pn_id_5_tabpanel_0 span.p-button-label').should('have.text', 'Aplicar');
      cy.get('#pn_id_5_tab_1').click();
      cy.get('#pn_id_5_tabpanel_1 label[for="field_ano-guia"]').should('have.text', 'Ano da Guia');
      cy.get('#pn_id_5_tabpanel_1 label[for="field_numero_guia"]').should('have.text', 'Número da Guia');
      cy.get('#pn_id_5_tabpanel_1 div:nth-child(3) > div.flex > label.inline-block').should('have.text', 'Origem');
      cy.get('#pn_id_5_tabpanel_1 div:nth-child(3) > div.flex > label.inline-block').should('have.text', 'Origem');
      cy.get('#pn_id_5_tabpanel_1 div:nth-child(4) label.inline-block').should('have.text', 'Destino');
     })

     it.skip( '5 - Consultar Processos de 2º Grau | Remessa Carga ao Advogado validar Label', () => {
          
      
          
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get(':nth-child(2) > [data-cy="adminMenu"] > .ml-auto').click()
      cy.get('[data-cy="navbar"] a[routerlink="/remessa-devolucao-advogado-2-grau"] span.font-medium').click();
      cy.get('[data-cy="Processo1GrauHeading"] span').should('have.text', 'Remessa Carga ao Advogado 2º Grau');
      cy.get('label.inline-block').should('have.text', 'Buscar por:');
      cy.get('label[for="rbNpu"]').should('have.text', 'NPU');
      cy.get('label[for="rbCodigo"]').should('have.text', 'Número');
      cy.get('span.p-button-label').should('have.text', 'Aplicar');
      cy.get('a.underline span').should('have.text', 'Limpar');
     })
     

       it.skip( '6 - Consultar Processos de 2º Grau | Pesquisa por NPU', () => {
          
      
          
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get(':nth-child(2) > [data-cy="adminMenu"] > .ml-auto').click()
      // cy.get('.open > .dropdown-menu > .ng-star-inserted > .dropdown-toggle > .font-medium').click()
      // cy.get('[data-cy="npu"] > .p-inputtext').type('00000026519768170000')
      // cy.get('[data-cy="numero"] > .p-inputtext').type('4800')
      // cy.get('.p-button-label').click()
      
      
      cy.get('[data-cy="navbar"] a[routerlink="/processo-2-grau"] span.font-medium').click();
      cy.get('[data-cy="npu"] [name="npu"]').click();
      cy.get('[data-cy="npu"] [name="npu"]').click();
      cy.get('[data-cy="npu"] [name="npu"]').click();
      cy.get('[data-cy="npu"] [name="npu"]').clear();
      cy.get('[data-cy="npu"] [name="npu"]').type('0000002-65.1976.8.17.0000');
      cy.get('[data-cy="numero"] [name="numero"]').click();
      cy.get('[data-cy="numero"] [name="numero"]').type('4800');
      cy.get('jhi-processo-2-grau.ng-star-inserted > div:nth-child(1)').click();
      cy.get('#pn_id_2_tabpanel_0 span.p-button-label').click();
    })



    
    it.skip( '7 - Consultar Processos de 2º Grau | Movimentação Individual Pesquisa por NPU', () => {
          
      
          
      cy.viewport(1920, 1080);
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get('a.alert-link').click();
         cy.wait(12000)
       cy.visit('https://legjud.teste.svc.tjpe.jus.br/')
       cy.get(':nth-child(2) > [data-cy="adminMenu"] > .ml-auto').click()
      
      
      cy.get('[data-cy="navbar"] a[routerlink="/movimentacao-individual-2-grau"] span.font-medium').click();
      cy.get('div.md\\:w-2xs').click();
      cy.get('[data-cy="npu"] [name="npu"]').click();
      cy.get('[data-cy="npu"] [name="npu"]').clear();
      cy.get('[data-cy="npu"] [name="npu"]').type('0000002-65.1976.8.17.0000');
      cy.get('button.p-button').click();
    })

})
