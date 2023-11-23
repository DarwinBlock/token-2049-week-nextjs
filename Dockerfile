FROM node:alpine
WORKDIR /token-week/
COPY . .
RUN npm i

CMD [ "npm", "run", "dev" ]