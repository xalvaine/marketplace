#!/bin/bash
#
# a simple deploy script
#
base="store-frontend" # force directory name to avoid duplicates

cd ..

tar --exclude="node_modules" --exclude=".next" --exclude=".husky" --exclude=".git" --exclude=".idea" -czvf $base.tar.gz $base
rsync --archive --verbose --progress $base.tar.gz dev@178.154.232.196:~/face/

ssh dev@178.154.232.196 "docker system prune -f
cd face
rm $base -rf
tar -xzvf $base.tar.gz
rm $base.tar.gz -rf
cd $base
docker-compose up -d --build"
