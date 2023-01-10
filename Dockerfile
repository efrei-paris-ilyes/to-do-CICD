FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent --only=prod

COPY . .

CMD ["sh", "-c" ,"npm run start"]