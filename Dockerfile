# O comando FROM faz o downloand da Imagem do Node na versão 18
FROM node:18
# O comando WORKDIR é o diretório onde o projeto será instalado dentro da imagem
WORKDIR /usr/src/app
#O comando COPY é para copiar todo os arquivos package json e colocando no diretório
#de trabalho(WORKDIR) app, definido acimas
COPY package*.json ./
#Copiando todos os arquivos e diretório para o diretório app
COPY . .
#O comando RUN é para executar o comando npm install no terminal e instalar as dependecias 
#do package.json  no diretório app
RUN npm install
#Instalando no sistema o módulo nodemon
RUN npm install nodemon --global
#O comando EXPOSE é para espor a porta de comunicação que foi definida no pojeto node
EXPOSE 7777
#Executar o comando de nodemon index.js quando o container subir
CMD ["node","index.js"] 