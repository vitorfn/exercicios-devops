# Define a imagem base
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o diretório de trabalho
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Inicia a aplicação
CMD [ "npm", "start" ]
