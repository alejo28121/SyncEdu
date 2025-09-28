# Etapa 1: Build de React
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN [ "npm", "start"]