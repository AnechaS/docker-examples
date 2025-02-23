# Simple TCP Tunnel

doc: https://github.com/ekzhang/bore

### Server
```bash
$ docker run --name local-tunnel -it --init -d --rm --network host ekzhang/bore server
```

### Client
```bash
$ docker run --name server-tunnel -it --init -d --rm ekzhang/bore local -l host.docker.internal -t ${remote-host} -p ${port} ${remote-port}
```
