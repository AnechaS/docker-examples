# Nginx Proxy

## Start

```bash
docker run -d --name nginx-proxy -p 9203:9200 nginx:alpine sh -c "\
echo 'events {} http { server { listen 9200; location / { \
proxy_pass https://host.docker.internal:9201; \
proxy_ssl_verify off; \
proxy_set_header Host example.com; \
proxy_set_header X-Real-IP \$remote_addr; \
proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for; \
} } }' > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
```
