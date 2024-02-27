# Use Node.js image as base
FROM node:20

# Set working directory
WORKDIR ./

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY ./ ./

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]