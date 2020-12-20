FROM node:12 AS development 
RUN mkdir /code && chown node:node /code
USER node
#EXPOSE 5000 5001
#ENV NODE_ENV=dev
WORKDIR /code
COPY --chown=node:node package*.json ./
RUN npm install --quiet

RUN mkdir -p node_modules

FROM node:12 AS production
USER node 
WORKDIR /code
COPY --from=development --chown=root:root /code/node_modules ./node_modules
COPY . .
CMD ["node", "./src/backend/server.js"]
