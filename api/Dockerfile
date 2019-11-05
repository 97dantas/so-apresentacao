FROM node:10-alpine
MAINTAINER Israel Dantas <israeldantasleite@gmail.com>

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . ./

EXPOSE 3000

CMD [ "npm", "run", "start" ]