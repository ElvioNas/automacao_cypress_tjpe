# Testes automatizados TJPE

Projeto de testes end-to-end (E2E) para sistemas do Tribunal de Justiça de Pernambuco, desenvolvido com Cypress.

## Pré-requisitos

- Windows, macOS ou Linux.
- Node.js em uma versão LTS compatível com a versão do Cypress instalada. O npm é incluído com o Node.js.
- Acesso à internet para instalar o Cypress e acessar os ambientes de teste usados pelas especificações.
- Credenciais e permissões válidas para os sistemas que exigem autenticação.
- Para selecionar um navegador diferente do Electron, Google Chrome, Microsoft Edge ou Mozilla Firefox instalado na máquina.

## Instalação

Na primeira utilização, abra um terminal na pasta raiz do projeto. Como o repositório ainda não possui `package.json`, crie o manifesto e instale o Cypress como dependência de desenvolvimento:

```bash
npm init -y
npm install --save-dev cypress
```

Se o `package.json` já existir, pule o `npm init -y`. Caso o Cypress já esteja listado nele, instale as dependências com:

```bash
npm install
```

Se o Cypress ainda não estiver listado no `package.json`, adicione-o com:

```bash
npm install --save-dev cypress
```

Confirme que o Cypress foi instalado corretamente:

```bash
npx cypress verify
```

## Executar os testes

Abra a interface do Cypress:

```bash
npx cypress open
```

Na interface, selecione **E2E Testing**, escolha um navegador e clique na especificação que deseja executar.

Para executar todas as especificações em modo headless pelo terminal:

```bash
npx cypress run
```

Para executar uma especificação específica:

```bash
npx cypress run --spec "cypress/e2e/Administrativo/AdministracaoCertidoesCiveis.cy.js"
```

Para escolher um navegador instalado:

```bash
npx cypress run --browser chrome
```

O diretório padrão de testes deste projeto é `cypress/e2e`. As configurações de execução ficam em `cypress.config.js`, e os comandos customizados e a inicialização de suporte ficam em `cypress/support/`.

## Organização

- `cypress/e2e/Administrativo/`: testes de administração de certidões.
- `cypress/e2e/AvaliacaoEstagioProbatorio/`: testes de avaliação de estágio probatório.
- `cypress/e2e/CertidaoUnificadas/`: testes de certidões unificadas.
- `cypress/e2e/GestaoAtrium/`: testes de administração, cadastro e gerenciamento do Atrium.
- `cypress/e2e/LegJud/`: testes de processos e solicitações de desarquivamento.
- `cypress/e2e/pje/`: testes relacionados ao PJe.
- `cypress/e2e/simap/`: testes relacionados ao SIMAP.
- `cypress/fixtures/`: dados de exemplo usados pelos testes.
- `cypress/support/commands.js`: comandos customizados do Cypress.
- `cypress/support/e2e.js`: arquivo de suporte carregado antes das especificações.

## Observações

- Os testes acessam URLs de homologação e teste do TJPE. Verifique se esses ambientes estão disponíveis e se seu usuário tem autorização antes de executar a suíte.
- Algumas especificações dependem de login ou de dados existentes nos ambientes. O resultado pode variar conforme esses dados e a disponibilidade dos sistemas.
- Não coloque senhas, tokens ou outros segredos em arquivos versionados. Use variáveis de ambiente ou outro mecanismo de segredo aprovado pela equipe e remova credenciais que eventualmente estejam registradas no código.
- Testes marcados com `it.skip` são ignorados pelo Cypress e não são executados.
- A configuração atual contém um `projectId` do Cypress Cloud. A execução local não requer gravação na nuvem; para usar a gravação, é necessário configurar o acesso e a chave de gravação do projeto.