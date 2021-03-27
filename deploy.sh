#!/bin/bash
#
# a simple deploy script
#
base=$(basename $PWD)

# build project
yarn install --frozen-lockfile
yarn build

cd ..

tar -czf $base.tar.gz $base
rsync --archive --verbose --progress $base.tar.gz   dev@178.154.232.196:~/face/

ssh dev@178.154.232.196 "cd face && tar -xzvf $base.tar.gz && cd $base && docker-compose up -d --build"
