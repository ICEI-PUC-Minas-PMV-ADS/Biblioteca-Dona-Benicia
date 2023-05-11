# base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install

# copy app files
COPY . .

# build app
RUN npm run build


EXPOSE 3000

# serve app
CMD ["npm", "run", "start"]