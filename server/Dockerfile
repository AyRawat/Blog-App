# Use a lighter version of Node as a parent image
FROM node:20-alpine
# Set the working directory to /client
WORKDIR /server
# copy package.json into the container at /client
COPY package*.json /server/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY . /server/
# Make port 3000 available to the world outside this container
EXPOSE 9000
# Run the app when the container launches
CMD ["npm", "start"]

