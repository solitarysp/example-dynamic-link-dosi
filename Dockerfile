# Use an official Node.js runtime as a base image
FROM node:14

# Install Git
RUN apt-get update && \
    apt-get install -y git
# Install Git
RUN npm install yarn

RUN mkdir -p /data/projects/app

# Set the working directory in the container
WORKDIR /data/projects/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
# Command to run your application
WORKDIR /data/projects/app
CMD ["yarn", "run","start"]
