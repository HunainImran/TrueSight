# Use the official Node.js image for Next.js
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./truesight/package.json ./truesight/package-lock.json /app/

# Install the required dependencies
RUN npm install

# Copy the rest of the frontend files
COPY ./truesight /app

# Build the Next.js app
RUN npm run build

# Expose the default Next.js port
EXPOSE 3000

# Set the entry point to start the Next.js server
CMD ["npm", "start"]
