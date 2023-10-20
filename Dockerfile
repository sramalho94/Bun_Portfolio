FROM node:19-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

ENV NODE_ENV production

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]