FROM node:14.19.1

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install nodemon -g

COPY . .

EXPOSE 1337

CMD nodemon server.js