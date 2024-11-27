FROM node:18-alpine

WORKDIR /app

# Copy only package files first to leverage docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port (Railway will override this)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]