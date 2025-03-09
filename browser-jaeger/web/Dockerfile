FROM node:18

WORKDIR /app

COPY ./ ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["parcel", "index.html", "--port", "3000"]
