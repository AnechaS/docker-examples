FROM node:14.19.1

WORKDIR /app

ENV NODE_ENV=production

COPY . .
RUN npm install --production

EXPOSE 1337

CMD ["npm", "start"]