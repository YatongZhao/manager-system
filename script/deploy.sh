#!/bin/sh
cd /opt/manager-system
git pull origin master
npm i
npm run build
rm -rf /opt/blog-ssr/manager-system/*
cp -r ../dist/* /opt/blog-ssr/manager-system/
cd /opt/blog-ssr
pm2 restart server.config.js
echo "DEPLOY successfully..."
exit
done