FROM doctorkirk/oracle-19c:latest

ENV NGROK_AUTHTOKEN=<YOU_NGROK_AUTHTOKEN>

USER root

RUN yum update -y && \
    yum install -y curl unzip jq

# Setup ngrok
RUN curl -O https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz && \
    tar xvzf ./ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin && \
    ngrok authtoken "${NGROK_AUTHTOKEN}" && \
    ngrok tcp 1521  --log=stdout > ngrok.log && \
    echo "NGROK listening on $(curl -s localhost:4040/api/tunnels | jq -r '.tunnels[0].public_url')"

USER oracle
