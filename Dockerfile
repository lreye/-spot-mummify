FROM node:12
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /code
ARG PORT=5000
ENV PORT $PORT
EXPOSE $PORT 5001
COPY package*.json /code
RUN npm install


COPY . /code

#CMD ["node", "server.js"]