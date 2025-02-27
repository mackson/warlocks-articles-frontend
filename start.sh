#!/bin/sh

rm -rf /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

npm run start &

nginx -g "daemon off;"
