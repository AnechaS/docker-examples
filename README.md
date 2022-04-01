# Nodejs Docker Example

> Note: change directory to root project.

## 01⏤Basic (Spit frontend and backend)

```bash
$ docker build . -f ./01-basic/Dockerfile.backend -t sample-01-backend
$ docker build . -f ./01-basic/Dockerfile.frontend -t sample-01-frontend
$ docker run --name sample-01-backend -p 1337:1337 -d sample-01-backend
$ docker run --name sample-01-frontend -p 3000:3000 -d sample-01-frontend
```

## 02⏤Concurrently

```bash
$ docker build -f ./02-concurrently/Dockerfile -t sample-02 .
$ docker run --name sample-02 -p 3000:3000 -p 1337:1337 sample-02
```

## 03⏤PM2

```bash
$ docker build -f ./03-pm2/Dockerfile -t sample-03 .
$ docker run --name sample-03 -p 3000:3000 -p 1337:1337 sample-03
```

## 04⏤ubuntu + nginx + pm2

```bash
$ docker build -f ./04-ubuntu-nginx-pm2/Dockerfile -t sample-04 .
$ docker run --name sample-04 -p 8000:80 sample-04
```

## 05⏤Docker Compose

```bash
$ docker-compose up
```
