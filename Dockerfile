FROM node:12
WORKDIR /usr/src/app

COPY package*.json /usr/src/app
RUN npm install

COPY . .

EXPOSE 5000
CMD ["node", "run", "server.js"]