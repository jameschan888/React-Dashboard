# if you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
FROM node:8

RUN mkdir -p /opt/app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 80 for react, and 5000 for API
# ARG PORT=3000
# ENV PORT $PORT
EXPOSE 3000 5000

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK CMD curl -fs http://localhost:5000/api/healthz || exit 1

# install dependencies first, in a different location for easier app bind mounting for local development

# copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY . /opt/app
RUN npm install  \
    && npm install --prefix client \
    && npm run build --prefix client \
    && npm cache clean --force

# if you want to use npm start instead, then use `docker run --init in production`
# so that signals are passed properly. Note the code in index.js is needed to catch Docker signals
# using node here is still more graceful stopping then npm with --init afaik
# I still can't come up with a good production way to run with npm and graceful shutdown
CMD [ "node", "index.js" ]
