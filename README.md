# Nodejs Docker Example

## nodejs-full-stack (Spit frontend and backend)

```bash
$ cd nodejs-full-stack
$ docker-compose up
```

## nodejs-full-stack-combined

```bash
$ cd nodejs-full-stack-combined
$ docker build -t example-02 .
$ docker run --name example-02 -p 8000:3000 -p 1337:1337 example-02
```

## nodejs-full-stack-pm2

```bash
$ cd nodejs-full-stack-pm2
$ docker build -t example-03 .
$ docker run --name example-03 -p 8000:3000 -p 1337:1337 example-03
```

## nodejs-full-stack-nginx

```bash
$ cd nodejs-full-stack-nginx
$ docker-compose up
```

## nodejs-full-stack-ubuntu-nginx-pm2

```bash
$ cd nodejs-full-stack-ubuntu-nginx-pm2
$ docker build -t example-05 .
$ docker run --name example-05 -p 8000:80 example-05
```

## nodejs-full-stack-development

```bash
$ cd nodejs-full-stack-development
$ docker-compose up
```

> NOTE: After run the commands, you can visit http://localhost:8000 in your browser.

## httpd-ssl

```bash
$ cd httpd-ssl
$ docker build . -t my-httpd
$ docker run --name my-httpd-server -p 80:80 -p 443:443 -d my-httpd
```

> NOTE: After starting the server, you can visit https://localhost in your browser