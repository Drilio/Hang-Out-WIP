# Base image
FROM node:16-alpine as builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy application code (excluding what's defined in .dockerignore)
COPY . .

# Build the application if necessary
RUN npm run build

# Use non-root user
USER node

# Expose the application port
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
