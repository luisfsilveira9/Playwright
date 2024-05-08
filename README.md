# Playwright Test Project

Este é um projeto de automação de testes utilizando o Playwright para testar a funcionalidade de um aplicativo de comércio eletrônico.

## Visão Geral

O projeto consiste em testes automatizados para verificar o comportamento das funcionalidades principais do aplicativo, incluindo login, navegação pelo catálogo de produtos, adição e remoção de produtos do carrinho de compras, entre outros.

## Requisitos

Certifique-se de ter o Node.js instalado na sua máquina. O projeto utiliza o Playwright para a automação de testes, portanto, é necessário instalar as dependências do projeto antes de executar os testes.

```bash
npm install
```

## Configuração

Antes de executar os testes, certifique-se de configurar os arquivos de credenciais e locators no diretório `config`.

- `config/credentials.js`: Arquivo contendo as credenciais necessárias para fazer login no aplicativo.
- `config/locators.js`: Arquivo contendo os seletores de elementos (locators) utilizados nos testes.

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

Este comando irá iniciar a execução dos testes automatizados definidos no diretório `tests`.

## Estrutura do Projeto

```
├── config/                  # Arquivos de configuração (credenciais, locators)
├── tests/                   # Testes automatizados
└── package.json             # Arquivo de configuração do projeto
```
