# ---- Stage 1: Build the React app ----
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Stage 2: Use OpenShift-friendly NGINX base ----
FROM registry.access.redhat.com/ubi8/httpd-24

# Copy built React app to NGINX content directory
COPY --from=build /app/build/ /var/www/html/

# The UBI image already has NGINX configured to serve from /opt/app-root/src

EXPOSE 8080
