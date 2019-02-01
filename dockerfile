From node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN nm install
COPY . .
EXPOSE 8084
CMD npm start