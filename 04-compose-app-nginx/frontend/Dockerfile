FROM node:14.19.1

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_SERVER=http://localhost:8000/api

COPY . .
RUN npm install --production && npm run build

EXPOSE 3000

CMD ["npm", "start"]