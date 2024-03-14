# Base image
FROM node:21-alpine3.18

ENV NEXTAUTH_SECRET=86Wm/FbDhw6CxQF874WhMQpTKOz1/SelhcOGyeKYjjI=
ENV NEXTAUTH_URL=http://localhost:3000
ENV MONGODB_URI=mongodb://localhost:27017/musixmatch
ENV MUSIX_MATCH_API_KEY=8e343bd24865f49e56ffb12348bb9ccf

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]