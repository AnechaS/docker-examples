FROM node:23.8.0-slim

WORKDIR /app

ENV NODE_ENV=production

RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | gpg --dearmor -o /usr/share/keyrings/elastic-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/elastic-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | tee /etc/apt/sources.list.d/elastic-8.x.list && \
    apt-get update && \
    apt-get install -y filebeat && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY . .
COPY filebeat.yml /etc/filebeat/filebeat.yml

# RUN filebeat modules enable system
RUN npm install --production

EXPOSE 3000

CMD service filebeat restart && npm start