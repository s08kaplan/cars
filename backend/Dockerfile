FROM node:22.18.0-alpine
WORKDIR /car/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4040
CMD ["node", "index.js"]