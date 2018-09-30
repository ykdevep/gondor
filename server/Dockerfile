FROM node:latest

RUN mkdir -p /opt/app/server
WORKDIR /opt/app/app/server
COPY ./ ./
RUN npm install && npm build

EXPOSE 4000
CMD ["dotenv -- node", "dist/main.js"]