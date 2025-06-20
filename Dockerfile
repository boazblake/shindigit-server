FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the backend source code
COPY . .

# Expose backend port (adjust if necessary)
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
