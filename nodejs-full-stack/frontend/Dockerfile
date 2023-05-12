FROM node:14.19.1

WORKDIR /app

ENV NODE_ENV=production

COPY . .
RUN npm install --production && npm run build

EXPOSE 3000

CMD ["npm", "start"]