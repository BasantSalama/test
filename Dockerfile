# Use an official Node.js runtime as the base image
FROM node-app

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the command to run your Node.js application
CMD ["node", "app.js"]
