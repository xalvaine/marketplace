#!/bin/bash
#
# a simple deploy script
#
base=$(basename $PWD) # force directory name to avoid duplicates

yarn build

echo Creating the archive...
tar -czf $base.tar.gz .next nginx dockerfile docker-compose.yml .env yarn.lock node_modules
rsync --archive --verbose --progress $base.tar.gz dev@178.154.232.196:~/face/store-frontend
rm $base.tar.gz -f

ssh dev@178.154.232.196 "docker system prune -f
cd face
cd store-frontend
docker-compose stop
sudo rm .next -rf
echo Unpacking the archive...
tar -xzf $base.tar.gz
rm $base.tar.gz -rf
docker-compose up -d --build"
