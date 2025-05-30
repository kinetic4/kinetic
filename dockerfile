FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire project
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 4173

# Start command
CMD ["npm", "start"]