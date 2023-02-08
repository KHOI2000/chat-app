FROM node:14

WORKDIR /app

# copy all file
COPY . /app

RUN npm install

CMD ["npm","run","start"]