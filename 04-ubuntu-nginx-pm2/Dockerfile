FROM ubuntu:18.04

RUN apt-get update && apt-get install -y curl 
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs build-essential nginx
RUN npm install -g pm2

COPY ./04-ubuntu-nginx-pm2/nginx.conf /etc/nginx/sites-available/default

RUN mkdir -p /home/node/app 

WORKDIR /home/node/app

ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_SERVER=http://localhost:8000/api

COPY ./backend ./backend
COPY ./frontend ./frontend
COPY ./04-ubuntu-nginx-pm2/ecosystem.config.js ./

RUN cd ./frontend && \
	npm install --production && \ 
	npm run build && \
	chmod -R 777 ./public
RUN cd ./backend && npm install --production

# TODO: Run the app with a non-root user.

EXPOSE 80

# ENTRYPOINT pm2 start ./ecosystem.config.js && nginx -g 'daemon off;'
ENTRYPOINT service nginx start && pm2 start ./ecosystem.config.js --no-daemon