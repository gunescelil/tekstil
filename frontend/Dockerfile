# Angular build için en güncel Node image

FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && cp dist/frontend-app/browser/index.csr.html dist/frontend-app/browser/index.html

# Production image
FROM node:latest
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package*.json ./
RUN npm install --omit=dev
EXPOSE 4200
CMD ["node", "server.js"]
