FROM node:18-alpine as frontend

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app (still as root)
COPY . .

# Fix permissions after copying everything
RUN chown -R node:node /app/node_modules

# React dev server runs on 3000
EXPOSE 3000
ENV HOST=0.0.0.0

CMD ["npm", "start"]
