FROM node:16.17.1

# set a directory for the app
WORKDIR /server

# copy package.json
COPY ./package.json /server

# install dependencies
RUN npm install

# copy all the files to the container
COPY . .

# .env
ENV PORT="8000"
ENV NODE_ENV="development"
ENV MONGO_URI="mongodb+srv://smix-ar:aze123@marhaba.urbqinu.mongodb.net/?retryWrites=true&w=majority"
ENV JWT_SECRET="smix"
ENV EMAIL_USER="abderrazzaqmars99@gmail.com"
ENV EMAIL_PASS=n"mxtwgulltnqqcmo"

# define the port number the container should expose
EXPOSE 8000

# run the command
CMD ["npm","run","server"]