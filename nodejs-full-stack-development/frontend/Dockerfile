FROM node:14.19.1

WORKDIR /app

COPY . .
RUN npm install
RUN npm install next

EXPOSE 3000

CMD npm run dev