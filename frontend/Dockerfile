# Etapa 1: Build de React
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY build/ /usr/local/apache2/htdocs/
FROM httpd:2.4