FROM node:boron

RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get install ruby-full && gem install sass --no-user-install

RUN mkdir /src

WORKDIR /src
