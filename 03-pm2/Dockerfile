FROM node:14.19.1

WORKDIR /app

ENV NODE_ENV production

COPY . .

RUN npm install pm2 -g
RUN cd ./frontend && npm install --production && npm run build
RUN cd ./backend && npm install --production

EXPOSE 3000
EXPOSE 1337

CMD ["pm2-runtime", "./ecosystem.config.js"]
