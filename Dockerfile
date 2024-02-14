FROM node:latest

# Install npm
RUN apt-get update && \
    apt-get install -y npm && \
    npm install -g npm@latest

# Set up working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . ./

# Run the build command
CMD ["npm", "run", "build"]
