FROM nginx:1.15.5
COPY dist /usr/share/nginx/html
COPY deployment/nginx.conf /etc/nginx/nginx.conf
