# Token Persistence Demo

Este é um projeto de demonstração que mostra como persistir um token de autenticação usando Zustand e AsyncStorage em uma aplicação React Native.

## Pré-requisitos

- Node.js
- Yarn

## Instalação

1. Instale as dependências do projeto:
```bash
yarn install
```

## Executando o Projeto

Para iniciar o projeto, execute:

```bash
yarn start
```

Isso iniciará o servidor de desenvolvimento do Expo. Você pode então:

- Pressionar `a` para abrir no emulador Android
- Pressionar `i` para abrir no simulador iOS
- Escanear o QR code com o app Expo Go no seu dispositivo físico

## Funcionalidades

- Tela de login com campos para usuário e senha
- Geração de token aleatório ao fazer login
- Persistência do token usando Zustand e AsyncStorage
- Tela home que só é acessível com token válido
- Funcionalidade de logout 