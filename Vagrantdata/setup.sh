#!/bin/bash
sudo -s
#for mongo
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
apt-get update

#Install GIT
apt-get install -y git-core

# setup nodejs
apt-get install -y curl build-essential openssl libssl-dev
git clone https://github.com/joyent/node.git
cd node
git checkout v0.10.26
./configure --openssl-libpath=/usr/lib/ssl
make
make test
make install
node -v # it's alive!
npm -v # it's alive!

# setup nginx
apt-get install -y nginx

# setup mongodb
apt-get install -y mongodb

# setup mysql
#echo 'mysql-server-5.1 mysql-server/root_password password budget'
#echo 'mysql-server-5.1 mysql-server/root_password_again password budget'
#apt-get -y install mysql-client mysql-server-5.1

# Setup supervisor
npm install supervisor -g
npm install forever -g

#Setup handlebars
npm install -g handlebars

#Setup node-inspector
npm i -g node-inspector

# Setup htop
apt-get install htop

#FRONT
#install grunt
npm install -g grunt-cli