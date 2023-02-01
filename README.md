# E2E - Mark L

Projeto de testes end-to-end(E2E) e de API's em conjunto, com utilização de Custom Commands.

# Pre-requisitos

Este projeto utiliza das versões `v16.18.0` e `v1.22.19` do Node.js e yarn respectivamente. Use a mesma versão ou superior.

## Instalações

Rode `yarn install` (ou `yarn i` versão curta) para instalar as dependências do projeto.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/santosvini/cypress-mark-L.git
```

Entre no diretório do projeto

```bash
  cd cypress-express-mark/
```

Inicie o servidor (acesse as pasta apps, e dentro de api/ e web/).

```bash
  yarn dev
```

para rodar a API e o projeto de forma local.

## Testes

Você pode e conseguirá rodar os teste em modo desktop e em modo mobile.

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  yarn cy:test
```
para rodar em modo headeless

```bash
  yarn cy:open
```
para rodar em modo GUI

## Desktop

Execute `yarn cy:test` para rodar em modo headeless nas configurações de desktop.

Ou, execute `yarn cy:open` para abrir o Cypress em modo interativo e com a viewport em modo desktop.

## Mobile

Execute `yarn cy:test:mobile` para rodar em modo headeless nas configurações mobile.

Ou, execute `yarn cy:open:mobile` para abrir o Cypress em modo interativo e com a viewport em modo mobile.

## Gerar Relatórios

- Para limpar os relatórios antigos: `yarn allure:clear` (não implementado).<br>
- Ativar/Gerar o report pela CLI: `yarn allure:results`<br>
- Para gerar os relatórios após a execução dos testes, dentro da pasta report-server: `yarn allure:generate`<br>
- Para abrir os relatórios gerados: `yarn allure:serve` instalar o pacote `http-server`, para subir o relatório gerado dentro da report-server de forma local.

- [cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin)

## Apoie este projeto

Caso tenha gostado do projeto e da documentação, deixe uma ⭐.
___

Este projeto foi criado por 💚 [Vini Santos](https://santosvini.github.io/).
