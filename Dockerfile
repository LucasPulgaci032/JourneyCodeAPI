FROM node:20
WORKDIR /Application
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx","nodemon","server.js"]
