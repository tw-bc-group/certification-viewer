FROM nginx:1.15.5
COPY wofeT5B1Ql.txt /usr/share/nginx/html
COPY deployment/nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
