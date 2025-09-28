# Etapa 1: Build de React
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
FROM httpd:2.4
COPY build/ /usr/local/apache2/htdocs/