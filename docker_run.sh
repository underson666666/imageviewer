#!/usr/bin/env bash
docker run -ti --rm -v `pwd`:/usr/share/nginx/html -p 80:80 nginx
