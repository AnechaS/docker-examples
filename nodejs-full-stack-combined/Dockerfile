FROM node:14.19.1

WORKDIR /app

ENV NODE_ENV production

COPY ./frontend ./frontend
COPY ./backend ./backend

RUN npm install -g concurrently
RUN cd ./frontend && npm install --production && npm run build
RUN cd ./backend && npm install --production

EXPOSE 3000
EXPOSE 1337

CMD [ "/bin/sh", "-c" , "concurrently 'cd /app/frontend && npm start' 'cd /app/backend && npm start'" ]