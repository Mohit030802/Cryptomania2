# Use an official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the app (adjust the build command as needed)
RUN npm run build

# Expose the port that your app will run on
EXPOSE 5173

# Start the app when the containeruns
CMD ["npm", "run", "start"]
