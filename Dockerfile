FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build


FROM nginx:alpine
COPY --from=build app/dist /usr/share/nginx/html
# COPY --from=build app/.env /app