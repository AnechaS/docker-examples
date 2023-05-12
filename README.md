# Nodejs Docker Example

## 01⏤Basic (Spit frontend and backend)

```bash
$ cd 01-basic
$ docker-compose up
```

## 02⏤Concurrently

```bash
$ cd 02-concurrently
$ docker build -t example-02 .
$ docker run --name example-02 -p 8000:3000 -p 1337:1337 example-02
```

## 03⏤PM2

```bash
$ cd 03-pm2
$ docker build -t example-03 .
$ docker run --name example-03 -p 8000:3000 -p 1337:1337 example-03
```

## 04⏤Docker Compose + Nginx 

```bash
$ cd 04-compose-app-nginx
$ docker-compose up
```

## 05⏤Ubuntu + Nginx + Pm2

```bash
$ cd 05-ubuntu-nginx-pm2
$ docker build -t example-05 .
$ docker run --name example-05 -p 8000:80 example-05
```

## 06⏤Development

```bash
$ cd 06-development
$ docker-compose up
```

> NOTE: After run the commands, you can visit http://localhost:8000 in your browser.

## httpd-ssl

```bash
$ cd 06-development
$ docker build . -t my-httpd
$ docker run --name my-httpd-server -p 80:80 -p 443:443 -d my-httpd
```

> NOTE: After starting the server, you can visit https://localhost in your browser