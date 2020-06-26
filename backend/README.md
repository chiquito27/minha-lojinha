# minha-lojinha-server
Servidor backend para minha-lojinha.

# Requerimentos
 - NodeJS v12.x
 - Yarn
 - ExpressJS
 - MongoDB
 
## Instalando mongo a partir do docker e configurando redirecionamento
 ```
    docker pull mongo  
    docker run --name mongodb -p 27017:27017 -d mongo
 ```

 Para rodar o mongodb após reiniciar  
 `docker start mongodb`  

 # Rodando projeto  
 Primeiro rode `yarn install` para instalar as dependências e depois execute `yarn dev`, isso vai iniciar seu servidor na porta 3000.

Atualmente o servidor usa uma instância atlas do mongoDB, então não há necessidade de rodar localmente o banco.

O servidor escuta requisições no caminho `http://localhost:3000/api/:resource`. Os `resources` estão descritos no `README.md` da raiz do repositório.