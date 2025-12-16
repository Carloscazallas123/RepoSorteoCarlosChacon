FROM node:22

WORKDIR /app

COPY package.json ./

RUN npm install

COPY main.js ./
COPY public/ ./public

EXPOSE 3000

CMD ["npm", "run", "start"]