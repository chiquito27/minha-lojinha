# minha-lojinha-ui
Frontend para minha-lojinha.

# Requerimentos
 - NodeJS v12.x
 - Yarn
 - React v16.13
 
## Deploy do frontend

```
yarn install && yarn start
```

O servidor do frontend estará rodando na porta 3000 localmente. Para evitar conflitos com o backend, a porta deve ser trocada no arquivo `package.json`.

```
"scripts": {
    ...
    "start": "PORT=3001 react-scripts start",
    ...
}
```