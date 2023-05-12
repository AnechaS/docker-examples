# Docker Examples

## nodejs-full-stack

```bash
$ cd nodejs-full-stack
$ docker-compose up
```

> NOTE:\
  backend running on http://localhost:1337 \
  frontend running on http://localhost:8000

## nodejs-full-stack-combined

```bash
$ cd nodejs-full-stack-combined
$ docker build -t nodejs-full-stack-combined .
$ docker run --name my-app -p 8000:3000 -p 1337:1337 nodejs-full-stack-combined
```

> NOTE:\
  backend running on http://localhost:1337 \
  frontend running on http://localhost:3000

## nodejs-full-stack-pm2

```bash
$ cd nodejs-full-stack-pm2
$ docker build -t nodejs-full-stack-pm2 .
$ docker run --name my-app -p 8000:3000 -p 1337:1337 nodejs-full-stack-pm2
```

> NOTE:\
  backend running on http://localhost:1337 \
  frontend running on http://localhost:8000

## nodejs-full-stack-nginx

```bash
$ cd nodejs-full-stack-nginx
$ docker-compose up
```

> NOTE:\
  app running on http://localhost:8000


## nodejs-full-stack-ubuntu-nginx-pm2

```bash
$ cd nodejs-full-stack-ubuntu-nginx-pm2
$ docker build -t nodejs-full-stack-ubuntu-nginx-pm2 .
$ docker run --name my-app -p 8000:80 nodejs-full-stack-ubuntu-nginx-pm2
```

> NOTE:\
  app running on http://localhost:8000


## nodejs-full-stack-development

```bash
$ cd nodejs-full-stack-development
$ docker-compose up
```

> NOTE:\
  backend running on http://localhost:1337 \
  frontend running on http://localhost:8000

## httpd-ssl

```bash
$ cd httpd-ssl
$ docker build . -t my-httpd
$ docker run --name my-httpd-server -p 80:80 -p 443:443 -d my-httpd
```

> NOTE:\
  app running on https://localhost

## mysql-phpmyadmin

```bash
$ cd mysql-phpmyadmin
$ docker-compose up
```
> NOTE:\
  mysql running on mysql://localhost:3306 \
  phpmyadmin running on http://localhost:8888

## php-mysql-phpmyadmin

```bash
$ cd php-mysql-phpmyadmin
$ docker-compose up
```
> NOTE:\
  app running on http://localhost:8080 \
  mysql running on mysql://localhost:3306 \
  phpmyadmin running on http://localhost:8888

## elasticsearch-kibana-standalone

```bash
$ cd elasticsearch-kibana-standalone
$ docker-compose up
```
> NOTE:\
  elasticsearch running on http://localhost:9200 \
  kibana running on mysql://localhost:5601 \