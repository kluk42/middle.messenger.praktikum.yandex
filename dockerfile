FROM node:18.12.1
WORKDIR /var/www
COPY ./server.js server.js
COPY ./dist dist
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD node server.js