FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

RUN rm -rf src test tsconfig*.json

EXPOSE 3000

CMD ["npm", "run", "start:prod"]