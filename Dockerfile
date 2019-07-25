FROM nginx:1.15.5
COPY deployment/nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
