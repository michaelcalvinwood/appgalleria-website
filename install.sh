#/bin/bash

clear
npm run build
cd build
rsync -a . root@appgalleria.com:/var/www/appgalleria.com/curBuild
cd ..
