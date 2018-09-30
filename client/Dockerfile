FROM node:latest

RUN mkdir -p /opt/app/client
WORKDIR /opt/app/app/client
COPY ./ ./
RUN npm install && npm build

EXPOSE 4200
CMD ["node", "dist/main.js"]
