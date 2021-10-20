FROM node:latest
MAINTAINER Mayke Alisson
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT node .\cluster.js
EXPOSE 3000
