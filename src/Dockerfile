FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn nx build frontend


FROM nginx:alpine
COPY --from=build app/dist/src /usr/share/nginx/html
COPY --from=build app/.env /app