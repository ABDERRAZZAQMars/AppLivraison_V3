FROM node:16.17.1

# set a directory for the app
WORKDIR /front-end

# copy package.json
COPY package.json /front-end

# install dependencies
RUN npm install

# copy all the files to the container
COPY . .

# define the port number the container should expose
EXPOSE 5173

# run the command
CMD ["npm","run","dev"]