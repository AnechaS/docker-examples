FROM httpd:2.4

COPY httpd.conf /usr/local/apache2/conf/httpd.conf
COPY index.html /usr/local/apache2/htdocs/index.html

RUN apt-get update \
    && apt-get -y install openssl \
    && cd /usr/local/apache2/conf \
    && openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout server.key -out server.crt -subj '/CN=localhost'