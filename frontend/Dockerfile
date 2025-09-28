FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Permisos de ejecución
RUN chmod +x node_modules/.bin/react-scripts

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
