FROM ubuntu:trusty
MAINTAINER chuck <chuck@shotton.com>

# docker build -t dweet-ifttt .
# docker run --name dweet-ifttt -e PORT=3100 --restart="always" -d dweet-ifttt

RUN DEBIAN_FRONTEND=noninteractive \
	apt-get update

# Install packages
RUN DEBIAN_FRONTEND=noninteractive \
    apt-get -y install \
        nodejs \
        npm \
        git
        
RUN apt-get -y clean

RUN ln -s /usr/bin/nodejs /usr/bin/node
ADD . /project
WORKDIR /project
RUN npm install
# RUN npm install -g bower
# RUN bower install --allow-root
EXPOSE 3000
CMD ["npm", "start"]
