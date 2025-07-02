# Use official Node.js Alpine image
FROM node:18-alpine AS api

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the source code
COPY . .

# Expose the port your API listens on
EXPOSE 5000

# Start the API
CMD ["node", "index.js"]