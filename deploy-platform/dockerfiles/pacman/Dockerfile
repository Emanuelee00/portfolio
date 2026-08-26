FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS build
WORKDIR /app
COPY . .
RUN ./web/build.sh
RUN uv tool run --from pygbag==0.9.3 pygbag --template web/pygbag.tmpl --build web

FROM nginx:alpine
COPY --from=build /app/web/build/web /usr/share/nginx/html
RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ =404;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
