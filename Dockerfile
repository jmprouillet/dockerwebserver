FROM node:slim
 
WORKDIR /app
 
# copy code, install npm dependencies
COPY http_server.js /app/http_server.js
COPY db.json /app/db.json
COPY package.json /app/package.json
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]