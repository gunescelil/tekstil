# Angular build için en güncel Node image

FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Nginx ile serve et
FROM nginx:latest
COPY --from=build /app/dist/frontend-app/browser/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
